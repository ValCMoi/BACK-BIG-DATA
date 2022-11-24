import { Module } from '@nestjs/common';
import { MailleService } from './maille.service';
import { MailleController } from './maille.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Univer } from 'src/univers/entities/univer.entity';
import { Maille } from './entities/maille.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Univer, Maille])
  ],
  controllers: [MailleController],
  providers: [MailleService]
})
export class MailleModule {}
