import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { Ride } from './ride.schema';

@Injectable()
export class RidesService {
  constructor(
    @InjectModel(Ride.name) private readonly rideModel: Model<Ride>,
  ) {}

  async create(createRideDto: CreateRideDto): Promise<Ride> {
    const newRide = new this.rideModel(createRideDto);
    return newRide.save();
  }

  async findAll(): Promise<Ride[]> {
    return this.rideModel.find().exec();
  }

  async findOne(id: string): Promise<Ride> {
    const ride = await this.rideModel.findById(id).exec();
    if (!ride) {
      throw new NotFoundException(`Ride with ID ${id} not found`);
    }
    return ride;
  }

  async update(id: string, updateRideDto: UpdateRideDto): Promise<Ride> {
    const updatedRide = await this.rideModel
      .findByIdAndUpdate(
        id,
        { ...updateRideDto, updatedAt: new Date() },
        { new: true },
      )
      .exec();
    if (!updatedRide) {
      throw new NotFoundException(`Ride with ID ${id} not found`);
    }
    return updatedRide;
  }

  async remove(id: string): Promise<void> {
    const result = await this.rideModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Ride with ID ${id} not found`);
    }
  }
}
