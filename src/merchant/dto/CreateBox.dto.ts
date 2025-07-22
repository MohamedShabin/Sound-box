import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateSoundBoxDTO {


  @IsNotEmpty()
  @IsString()
  deviceId: string

  @IsNotEmpty()
  @IsString()
  merchantId: number
}