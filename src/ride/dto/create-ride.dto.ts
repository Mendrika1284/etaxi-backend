import {
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsEnum,
} from 'class-validator';

export class CreateRideDto {
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  driverId: string;

  @IsNotEmpty()
  @IsObject()
  pickupLocation: {
    latitude: number;
    longitude: number;
    address: string;
  };

  @IsNotEmpty()
  @IsObject()
  dropoffLocation: {
    latitude: number;
    longitude: number;
    address: string;
  };

  @IsNotEmpty()
  @IsEnum(['pending', 'in_progress', 'completed', 'cancelled'])
  status: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
