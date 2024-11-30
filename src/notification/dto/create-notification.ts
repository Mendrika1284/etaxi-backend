import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsBoolean()
  isRead?: boolean;
}
