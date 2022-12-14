import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';
import {Observable, from} from 'rxjs'
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class RateService {

  constructor(
    @InjectRepository(Rate)
    private readonly rateRepository: Repository<Rate>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
    ){}

  async create(createRateDto: CreateRateDto): Promise<Observable<Rate>> {

    const theClient = await this.clientRepository.findOne({where:{id:createRateDto.client}})
    const theProduct = await this.productRepository.findOne({where:{id:createRateDto.product}})

    const newRate = new Rate()
    
    newRate.client = theClient
    newRate.rateNumber = createRateDto.rateNumber
    newRate.product = theProduct

    return from(this.rateRepository.save(newRate))
  }

  findAll() {
    return this.rateRepository.find({relations: {client: true, product: true}});
  }

  findOne(idInput: string) {
    return this.rateRepository.findOne({where: {id : idInput}, relations: {client: true, product:true}});
  }

  
  async update(idInput: string, updateRateDto: UpdateRateDto) {   
    
    const rateTochange = await this.findOne(idInput)

    rateTochange.client = await this.clientRepository.findOne({where:{id: updateRateDto.client}})
    rateTochange.product = await this.productRepository.findOne({where:{id: updateRateDto.product}})
    rateTochange.rateNumber = updateRateDto.rateNumber

    const res = await from(this.rateRepository.save(rateTochange))
    return res;
  }
  
 
  async remove(idInput: string) {
    const entityToDelete = await this.rateRepository.findOne({where: {id: idInput}})
    this.rateRepository.remove(entityToDelete)
    return 'Delete successfull';
  }
}
