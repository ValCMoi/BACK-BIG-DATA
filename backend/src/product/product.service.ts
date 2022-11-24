import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, fromEvent, Observable } from 'rxjs';
import { Famille } from 'src/famille/entities/famille.entity';
import { Maille } from 'src/maille/entities/maille.entity';
import { Univer } from 'src/univers/entities/univer.entity';
import { IsNull, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Famille)
    private readonly familleRepository: Repository<Famille>,
    @InjectRepository(Univer)
    private readonly universRepository: Repository<Univer>,
    @InjectRepository(Maille)
    private readonly mailleRepository: Repository<Maille>
  ){}


  async create(createProductDto: CreateProductDto): Promise<Observable<Product>> {
    const newProduct = new Product()

    newProduct.name = createProductDto.name
    newProduct.price = createProductDto.price
    newProduct.famille = createProductDto.familleId ? await this.familleRepository.findOne({where:{id : createProductDto.familleId}}) : null
    newProduct.univers = createProductDto.universId ? await this.universRepository.findOne({where:{id : createProductDto.universId}}) : null
    newProduct.maille = createProductDto.mailleId ? await this.mailleRepository.findOne({where:{id : createProductDto.mailleId}}) : null
    
    return from(this.productRepository.save(newProduct));
  }

  findAll(): Observable<Product[]> {
    return from(this.productRepository.find({relations: {rates: true}}));
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
