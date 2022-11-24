import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateFamilleDto } from './dto/create-famille.dto';
import { UpdateFamilleDto } from './dto/update-famille.dto';
import { Famille } from './entities/famille.entity';

@Injectable()
export class FamilleService {

  constructor(@InjectRepository(Famille) private readonly familleRepository: Repository<Famille>){}

  async create(createFamilleDto: CreateFamilleDto):Promise<Observable<Famille>>{
    return from(this.familleRepository.save(createFamilleDto));
  }

  findAll(): Promise<Famille[]> {
    return this.familleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} famille`;
  }

  update(id: number, updateFamilleDto: UpdateFamilleDto) {
    return `This action updates a #${id} famille`;
  }

  remove(id: number) {
    return `This action removes a #${id} famille`;
  }
}
