import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import {Observable, from} from 'rxjs'
import { Product } from 'src/product/entities/product.entity';
import { Client } from 'src/client/entities/client.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ){}

  async create(createCartDto: CreateCartDto): Promise<Observable<Cart>> {

    const newCart = new Cart()

    newCart.id = createCartDto.id
    newCart.month = createCartDto.month ?? 0
    newCart.products = await this.productRepository.find({where:{id:In(createCartDto.productsId)}})

    return from(this.cartRepository.save(newCart))
  }

  findAll() {
    return this.cartRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
