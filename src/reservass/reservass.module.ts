import { Module } from '@nestjs/common';
import { ReservassService } from './reservass.service';
import { ReservassController } from './reservass.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ReservassController],
  providers: [ReservassService],
  imports : [NatsModule]
})
export class ReservassModule {}
