import {
  IsString,
  IsEnum,
  IsEmail,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Role } from '../users.schema';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Role)
  role: Role;

  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  profilePicture?: string;
}
