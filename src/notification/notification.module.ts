import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsService } from './notification.service';
import { NotificationsController } from './notification.controller';
import { Notif, NotifSchema } from './notification.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notif.name, schema: NotifSchema }]),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
