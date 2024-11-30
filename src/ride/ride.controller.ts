import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RidesService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { Ride } from './ride.schema';

@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) {}

  @Post()
  async create(@Body() createRideDto: CreateRideDto): Promise<Ride> {
    return this.ridesService.create(createRideDto);
  }

  @Get()
  async findAll(): Promise<Ride[]> {
    return this.ridesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ride> {
    return this.ridesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRideDto: UpdateRideDto,
  ): Promise<Ride> {
    return this.ridesService.update(id, updateRideDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.ridesService.remove(id);
  }
}
