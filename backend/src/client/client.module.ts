import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Client } from './entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rate } from 'src/rate/entities/rate.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Client, Rate])
  ],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
