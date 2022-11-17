import { Module } from '@nestjs/common';
import { RateService } from './rate.service';
import { RateController } from './rate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rate } from './entities/rate.entity';
import { Client } from 'src/client/entities/client.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Rate, Client])],
  controllers: [RateController],
  providers: [RateService]
})
export class RateModule {}
