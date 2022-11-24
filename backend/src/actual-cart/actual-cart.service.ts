import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Product } from 'src/product/entities/product.entity';
import { In, Repository } from 'typeorm';
import { CreateActualCartDto } from './dto/create-actual-cart.dto';
import { UpdateActualCartDto } from './dto/update-actual-cart.dto';
import { ActualCart } from './entities/actual-cart.entity';
import {Observable, from} from 'rxjs'

@Injectable()
export class ActualCartService {

  constructor(
    @InjectRepository(ActualCart) private readonly actualCartRepository: Repository<ActualCart>,
    @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ){}

  async create(createActualCartDto: CreateActualCartDto): Promise<Observable<ActualCart>> {
    const newActualCart = new ActualCart()

    newActualCart.id = ''+Math.floor(Math.random() * 1000000000)
    newActualCart.month = createActualCartDto.month
    newActualCart.client = await this.clientRepository.findOne({where:{id:createActualCartDto.idClient}})
    newActualCart.products = await this.productRepository.find({where:{id:In(createActualCartDto.productsId)}})

    return from(this.actualCartRepository.save(newActualCart));
  }

  findAll() {
    return `This action returns all actualCart`;
  }

  findOne(id: string) {
    return `This action returns a #${id} actualCart`;
  }

  update(id: string, updateActualCartDto: UpdateActualCartDto) {
    return `This action updates a #${id} actualCart`;
  }

  remove(id: string) {
    return `This action removes a #${id} actualCart`;
  }
}
