import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantModule } from './merchant/merchant.module';
import * as ormConfig from 'src/orm-config/orm.config';
import { env } from './config/env.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    MerchantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
