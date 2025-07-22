import { InjectRepository } from "@nestjs/typeorm";
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { SoundBoxEntity } from "../merchant/entity/soundbox.entity";
import { Repository } from "typeorm";
import { BadRequestException } from "@nestjs/common";

@WebSocketGateway()

export class SoundBoxGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server

  constructor(
    @InjectRepository(SoundBoxEntity) private readonly soundBoxRepo: Repository<SoundBoxEntity>) { }

  async handleConnection(client: Socket) {
    try {
      console.info('======= CONNECTED ======')
      const deviceId = client.handshake.query.deviceID as string
      const checkDeviceId = await this.soundBoxRepo.findOne({ where: { deviceId } })
      if (!checkDeviceId) {
        client.disconnect()
        throw new BadRequestException('Invalid device ID')
      }
      client.emit('acknowledgement', { message: `${deviceId} Connected Successfully` })
      if (deviceId) {
        client.join(deviceId)
        await this.soundBoxRepo.update({ deviceId: deviceId }, { isConnected: true })
        console.log(`Sound-Box Connected ${deviceId}`)
      }
    } catch (error) {
      console.error(`Error : ${error.message}`)
    }
  }

  async handleDisconnect(client: Socket) {
    try {
      console.info('======= DISCONNECTED ======')
      const deviceId = client.handshake.query.deviceID as string
      const checkDeviceId = await this.soundBoxRepo.findOne({ where: { deviceId } })
      if (!checkDeviceId) {
        throw new BadRequestException('Invalid device ID')
      }

      if (deviceId) {
        await this.soundBoxRepo.update({ id: checkDeviceId.id }, { isConnected: false })
        console.log(`Sound-Box Disconnected ${deviceId}`)
      }
    } catch (error) {
      console.error(`Error : ${error.message}`)
    }
  }

  async sendToDevice(deviceId: string, payload: any) {
    this.server.to(deviceId).emit('payment-notification', payload)
  }
}