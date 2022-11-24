import { Injectable } from '@nestjs/common';
import { CreateUniverDto } from './dto/create-univer.dto';
import { UpdateUniverDto } from './dto/update-univer.dto';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Univer } from './entities/univer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UniversService {

  constructor(
    @InjectRepository(Univer) private readonly universRepository: Repository<Univer>
  ){}

  async create(createUniverDto: CreateUniverDto): Promise<Observable<Univer>> {
    return from(this.universRepository.save(createUniverDto));
  }

  async findAll():Promise<Observable<Univer[]>> {
    return from(this.universRepository.find());
  }

  findOne(id: number) {
    return `This action returns a #${id} univer`;
  }

  update(id: number, updateUniverDto: UpdateUniverDto) {
    return `This action updates a #${id} univer`;
  }

  async remove(idInput: string) {
    const entityToDelete = await this.universRepository.findOne({where: {id: idInput}})
    this.universRepository.remove(entityToDelete)
    return 'Delete successfull';
  }
}
