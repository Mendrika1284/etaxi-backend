import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDto } from './drivers.dto';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {}
