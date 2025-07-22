import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { MerchantEntity } from "./merchant.entity";
import { BaseEntity } from "src/common/base.entity";

@Entity({ name: 'soundbox' })
export class SoundBoxEntity extends BaseEntity {

  @Column({ default: false })
  isConnected: boolean

  @Column({ unique: true })
  deviceId: string

  @OneToOne(() => MerchantEntity, merchant => merchant.soundBox)
  @JoinColumn()
  merchant: MerchantEntity
}