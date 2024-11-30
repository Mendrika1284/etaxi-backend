import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DriversModule } from './drivers/drivers.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [UsersModule, DriversModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
