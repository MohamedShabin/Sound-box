import { BaseEntity } from "src/common/base.entity";
import { Column, Entity } from "typeorm";
import { PaymentStatus } from "../Enum/paymentstatus.enum";

@Entity({ name: 'payments' })
export class Payments extends BaseEntity {
  @Column()
  upiId: string

  @Column()
  amount: number

  @Column()
  deviceId: string

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
  status: PaymentStatus
}