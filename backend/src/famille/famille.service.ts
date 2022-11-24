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

  async findOne(idInput: string) {
    return await from(this.familleRepository.findOne({where:{id:idInput}})) ?? null;
  }

  update(id: number, updateFamilleDto: UpdateFamilleDto) {
    return `This action updates a #${id} famille`;
  }

  async remove(idInput: string) {
    const entityToDelete = await this.familleRepository.findOne({where: {id: idInput}})
    this.familleRepository.remove(entityToDelete)
    return 'Delete successfull';
  }
}
