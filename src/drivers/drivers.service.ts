import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Driver } from './drivers.schema';
import { Role, Users } from 'src/users/users.schema';
import { CreateDriverDto } from './dto/drivers.dto';
import { UpdateDriverDto } from './dto/update-drivers.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Driver.name) private readonly driverModel: Model<Driver>,
    @InjectModel(Users.name) private readonly userModel: Model<Users>,
  ) {}

  async create(createDriverDto: CreateDriverDto): Promise<Driver> {
    const { user, ...driverDetails } = createDriverDto;

    const newUser = new this.userModel({
      ...user,
      role: Role.driver,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const savedUser = await newUser.save();

    const newDriver = new this.driverModel({
      userId: savedUser._id,
      ...driverDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return newDriver.save();
  }

  async update(id: string, updateDriverDto: UpdateDriverDto): Promise<Driver> {
    const { user, ...driverDetails } = updateDriverDto;

    const driver = await this.driverModel.findById(id).exec();
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }

    if (user) {
      await this.userModel
        .findByIdAndUpdate(driver.userId, user, {
          new: true,
        })
        .exec();
    }

    return this.driverModel
      .findByIdAndUpdate(
        id,
        { ...driverDetails, updatedAt: new Date() },
        { new: true },
      )
      .exec();
  }

  async findAll(): Promise<Driver[]> {
    return this.driverModel.find().populate('userId').exec();
  }

  async findOne(id: string): Promise<Driver> {
    const driver = await this.driverModel
      .findById(id)
      .populate('userId')
      .exec();
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return driver;
  }

  async delete(id: string): Promise<void> {
    const driver = await this.driverModel.findByIdAndDelete(id).exec();
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    await this.userModel.findByIdAndDelete(driver.userId).exec();
  }
}
