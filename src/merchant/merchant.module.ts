import { Module } from '@nestjs/common';
import { MerchantService } from './service/merchant.service';
import { MerchantController } from './controller/merchant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantEntity } from './entity/merchant.entity';
import { SoundBoxEntity } from './entity/soundbox.entity';
import { PaymentController } from './controller/payment.controller';
import { SoundBoxGateway } from '../common/ws.gateway';
import { PaymentService } from './service/payment.service';
import { Payments } from './entity/payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MerchantEntity, SoundBoxEntity, Payments])],
  controllers: [MerchantController, PaymentController],
  providers: [MerchantService, SoundBoxGateway, PaymentService],
})
export class MerchantModule { }
