import { IsNotEmpty, IsOptional, IsString, IsArray } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preferences?: string[];
}
