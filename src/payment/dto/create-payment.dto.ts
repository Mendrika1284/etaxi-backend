import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  rideId: string;

  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsEnum(['card', 'paypal'])
  paymentMethod: string;

  @IsNotEmpty()
  @IsEnum(['success', 'failed'])
  status: string;
}
