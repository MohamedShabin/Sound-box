import { Column, Entity, OneToOne, Unique } from "typeorm";
import { SoundBoxEntity } from "./soundbox.entity";
import { BaseEntity } from "src/common/base.entity";

@Entity({ name: 'merchant' })
@Unique(['name', 'deletedAt'])
export class MerchantEntity extends BaseEntity {

  @Column()
  name: string

  @Column({ unique: true })
  upiId: string

  @Column({ unique: true, nullable: true })
  email: string

  @Column({ unique: true, nullable: true })
  mobileNo: string

  @OneToOne(() => SoundBoxEntity, soundBox => soundBox.merchant)
  soundBox: SoundBoxEntity
}