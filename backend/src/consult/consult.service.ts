import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';
import { Consult } from './entities/consult.entity';
import { Observable, from } from 'rxjs';

@Injectable()
export class ConsultService {

  constructor(
    @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    @InjectRepository(Consult) private readonly consultRepository: Repository<Consult>
  ){}

  async create(createConsultDto: CreateConsultDto): Promise<Observable<Consult>> {

    const newConsult = new Consult()

    newConsult.id = ''+Math.floor(Math.random() * 1000000);
    newConsult.month = createConsultDto.month
    newConsult.client = await this.clientRepository.findOne({where:{id: createConsultDto.idClient}})
    newConsult.product = await this.productRepository.findOne({where:{id: createConsultDto.productId}})

    return from(this.consultRepository.save(newConsult));
  }

  findAll() {
    return this.consultRepository.find();
  }

  findOne(idInput: string) {
    return this.consultRepository.find({where:{id:idInput}});
  }

  update(id: number, updateConsultDto: UpdateConsultDto) {
    return `This action updates a #${id} consult`;
  }

 
  async remove(idInput: string) {
    const entityToDelete = await this.consultRepository.findOne({where: {id: idInput}})
    this.consultRepository.remove(entityToDelete)
    return 'Delete successfull';
  }
}
