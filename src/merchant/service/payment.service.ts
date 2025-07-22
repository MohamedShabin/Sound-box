import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Payments } from "../entity/payment.entity";
import { PaymentStatus } from "../Enum/paymentstatus.enum";

@Injectable()
export class PaymentService {
  constructor(@InjectRepository(Payments) private readonly paymentModel: Repository<Payments>) { }

  async createPayment(upiId: string, amount: number, deviceId: string) {
    try {
      await this.paymentModel.save({ upiId, amount, deviceId, status: PaymentStatus.SUCCESS })
    } catch (error) {
      throw new BadRequestException(error.message ?? error)
    }
  }
}