import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './client.schema';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const newClient = new this.clientModel(createClientDto);
    return newClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    const client = await this.clientModel.findById(id).exec();
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const updatedClient = await this.clientModel
      .findByIdAndUpdate(
        id,
        { ...updateClientDto, updatedAt: new Date() },
        { new: true },
      )
      .exec();
    if (!updatedClient) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
    return updatedClient;
  }

  async remove(id: string): Promise<void> {
    const result = await this.clientModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
  }
}
