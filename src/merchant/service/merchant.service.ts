import { BadRequestException, Injectable } from '@nestjs/common';
import { MerchantEntity } from '../entity/merchant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMerchantDTO } from '../dto/createMerchant.dto';
import { CreateSoundBoxDTO } from '../dto/CreateBox.dto';
import { SoundBoxEntity } from '../entity/soundbox.entity';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(MerchantEntity)
    private readonly merchantRepository: Repository<MerchantEntity>,
    @InjectRepository(SoundBoxEntity)
    private readonly soundBoxRepository: Repository<SoundBoxEntity>) { }

  async createMerchant(body: CreateMerchantDTO) {
    try {
      const merchant = await this.merchantRepository.save(body)
      return {
        success: true,
        merchant
      }
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async createSoundBox(body: CreateSoundBoxDTO) {
    try {
      const merchant = await this.merchantRepository.findOne({ where: { id: body.merchantId }, withDeleted: false })
      if (merchant) throw new BadRequestException('User has already in same name')

      const soundBox = await this.soundBoxRepository.save(
        {
          deviceId: body.deviceId,
          merchant
        })

      return {
        success: true,
        soundBox
      }
    } catch (error) {
      throw new BadRequestException(error.response)
    }
  }

  async fetchAllMerchant() {
    try {
      const merchant = await this.merchantRepository.find({ relations: ['soundBox'] })
      return {
        success: true,
        merchant
      }
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
