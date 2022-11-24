import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMailleDto } from './dto/create-maille.dto';
import { UpdateMailleDto } from './dto/update-maille.dto';
import { Maille } from './entities/maille.entity';
import {Observable, from} from 'rxjs'
@Injectable()
export class MailleService {

  constructor(
    @InjectRepository(Maille) private readonly mailleRepository: Repository<Maille>
    ){}

  async create(createMailleDto: CreateMailleDto): Promise<Observable <Maille>> {
    return from(this.mailleRepository.save(createMailleDto));
  }

  findAll():Observable<Maille[]> {
    return from(this.mailleRepository.find());
  }

  findOne(idInput: string):Observable<Maille> {
    return from(this.mailleRepository.findOne({where:{id:idInput}}));
  }

  update(id: number, updateMailleDto: UpdateMailleDto) {
    return `This action updates a #${id} maille`;
  }

  async remove(idInput: string) {
    const entityToDelete = await this.mailleRepository.findOne({where: {id: idInput}})
    this.mailleRepository.remove(entityToDelete)
    return 'Delete successfull';
  }
}
