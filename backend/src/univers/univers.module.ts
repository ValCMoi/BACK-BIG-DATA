import { Module } from '@nestjs/common';
import { UniversService } from './univers.service';
import { UniversController } from './univers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Famille } from 'src/famille/entities/famille.entity';
import { Univer } from './entities/univer.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Univer, Famille])
  ],
  controllers: [UniversController],
  providers: [UniversService]
})
export class UniversModule {}
