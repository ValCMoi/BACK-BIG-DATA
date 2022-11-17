import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, fromEvent, Observable } from 'rxjs';
import { IsNull, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){}


  create(createProductDto: CreateProductDto): Observable<Product> {
    return from(this.productRepository.save(createProductDto));
  }

  findAll(): Observable<Product[]> {
    return from(this.productRepository.find());
  }

  findOne(idInput: string): Observable<Product> {
    return from(this.productRepository.findOne({where : {id : idInput}}));
  }

  update(idInput: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(idInput, updateProductDto);
  }

  async remove(idInput: string) {
    const entityToDelete = await this.productRepository.findOne({where:{id:idInput}})
    if(entityToDelete !== null){
      return 'Error not data found to delete'
    }
    return this.productRepository.remove(entityToDelete);
  }
}
