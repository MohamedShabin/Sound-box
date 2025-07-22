import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MerchantEntity } from "../entity/merchant.entity";
import { Repository } from "typeorm";
import { SoundBoxGateway } from "../../common/ws.gateway";
import { PaymentService } from "../service/payment.service";

@Controller('payments')
export class PaymentController {
  constructor(
    @InjectRepository(MerchantEntity) private readonly merchantRepo: Repository<MerchantEntity>,
    private readonly gateway: SoundBoxGateway,
    private readonly paymentService: PaymentService
  ) { }

  @Post()
  async handlePayment(@Body() data: { upiId: string, amount: number }) {
    try {
      const { upiId, amount } = data
      console.log(typeof amount)

      const merchant = await this.merchantRepo.findOne({
        where: { upiId }, withDeleted: false,
        relations: ['soundBox']
      })

      if (!merchant) throw new BadRequestException('Merchant not found')

      await this.paymentService.createPayment(upiId, amount, merchant?.soundBox?.deviceId)

      if (merchant?.soundBox) {
        this.gateway.sendToDevice(merchant?.soundBox?.deviceId, {
          message: '₹' + amount + ' received from ' + upiId,
          amount: Number(amount).toFixed(2),
          timestamp: new Date().toISOString()
        })
        return { status: 'Success' }
      }
      return { status: 'Failed' }
    }
    catch (error) {
      console.error(error.message)
    }
  }
}