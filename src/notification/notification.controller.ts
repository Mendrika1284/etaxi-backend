import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NotificationsService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification';
import { Notif } from './notification.schema';

@Controller('notification')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async create(
    @Body() createNotificationDto: CreateNotificationDto,
  ): Promise<Notif> {
    return this.notificationsService.create(createNotificationDto);
  }

  @Get(':userId')
  async findByUser(@Param('userId') userId: string): Promise<Notif[]> {
    return this.notificationsService.findByUser(userId);
  }

  @Put(':id/mark-as-read')
  async markAsRead(@Param('id') id: string): Promise<Notif> {
    return this.notificationsService.markAsRead(id);
  }
}
