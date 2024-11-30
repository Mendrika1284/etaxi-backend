import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { ClientsModule } from './client/client.module';
import { RidesModule } from './ride/ride.module';
import { PaymentsModule } from './payment/payment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NotificationsModule } from './notification/notification.module';

@Module({
  imports: [
    UsersModule,
    DriversModule,
    ClientsModule,
    RidesModule,
    PaymentsModule,
    NotificationsModule,
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
