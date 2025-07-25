import { Test, TestingModule } from '@nestjs/testing';
import { MerchantController } from './controller/merchant.controller';
import { MerchantService } from './service/merchant.service';

describe('MerchantController', () => {
  let controller: MerchantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchantController],
      providers: [MerchantService],
    }).compile();

    controller = module.get<MerchantController>(MerchantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
