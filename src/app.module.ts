import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LicoressModule } from './licoress/licoress.module';
import { ReservassModule } from './reservass/reservass.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [LicoressModule, ReservassModule,NatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
