import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNotificationDto } from './dto/create-notification';
import { Notif } from './notification.schema';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notif.name)
    private readonly notificationModel: Model<Notif>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto): Promise<Notif> {
    const newNotification = new this.notificationModel(createNotificationDto);
    return newNotification.save();
  }

  async findByUser(userId: string): Promise<Notif[]> {
    return this.notificationModel.find({ userId }).exec();
  }

  async markAsRead(id: string): Promise<Notif> {
    return this.notificationModel
      .findByIdAndUpdate(id, { isRead: true }, { new: true })
      .exec();
  }
}
