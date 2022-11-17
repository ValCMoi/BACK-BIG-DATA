import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';
import {Observable, from} from 'rxjs'

@Injectable()
export class RateService {

  constructor(
    @InjectRepository(Rate)
    private readonly rateRepository: Repository<Rate>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ){}

  async create(createRateDto: CreateRateDto): Promise<Observable<Rate>> {
    const theClient = await this.clientRepository.findOne({where:{id:createRateDto.clientId}})

    const newRate = new Rate()
    newRate.client = theClient
    newRate.rateNumber = createRateDto.rateNumber

    return from(this.rateRepository.save(newRate))
  }

  findAll() {
    return this.rateRepository.find({relations: {client: true}});
  }

  findOne(idInput: string) {
    return this.rateRepository.findOne({where: {id : idInput}, relations: {client: true}});
  }

  update(id: number, updateRateDto: UpdateRateDto) {
    return `This action updates a #${id} rate`;
  }
  
  async remove(idInput: string) {
    const entityToDelete = await this.rateRepository.findOne({where: {id: idInput}})
    this.rateRepository.remove(entityToDelete)
    return 'Delete successfull';
  }
}
