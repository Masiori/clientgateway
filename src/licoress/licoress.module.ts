import { Module } from '@nestjs/common';
import { LicoressService } from './licoress.service';
import { LicoressController } from './licoress.controller';

@Module({
  controllers: [LicoressController],
  providers: [LicoressService],
})
export class LicoressModule {}
