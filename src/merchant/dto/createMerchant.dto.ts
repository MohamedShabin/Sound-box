import { IsNotEmpty, IsString } from "class-validator";

export class CreateMerchantDTO {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  upiId: string;

}