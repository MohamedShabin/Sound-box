import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MerchantService } from '../service/merchant.service';
import { CreateMerchantDTO } from '../dto/createMerchant.dto';
import { CreateSoundBoxDTO } from '../dto/CreateBox.dto';

@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) { }

  @Get()
  async fetchAllMerchant() {
    return await this.merchantService.fetchAllMerchant()
  }

  @Post()
  async createMerchant(@Body() body: CreateMerchantDTO) {
    return await this.merchantService.createMerchant(body)
  }

  @Post('soundbox')
  async createSoundBox(@Body() body: CreateSoundBoxDTO) {
    return await this.merchantService.createSoundBox(body)
  }

  @Put()
  async updateMerchant() { }

  @Delete()
  async deleteMerchant() { }
}
