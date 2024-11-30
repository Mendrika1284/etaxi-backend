import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { ClientModule } from './client/client.module';
import { RideModule } from './ride/ride.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UsersModule, DriversModule, ClientModule, RideModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
