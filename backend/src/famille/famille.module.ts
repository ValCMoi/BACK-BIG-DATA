import { Module } from '@nestjs/common';
import { FamilleService } from './famille.service';
import { FamilleController } from './famille.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Famille } from './entities/famille.entity';
import { Univer } from 'src/univers/entities/univer.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Famille, Univer])
  ],
  controllers: [FamilleController],
  providers: [FamilleService]
})
export class FamilleModule {}
