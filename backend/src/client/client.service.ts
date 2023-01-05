import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { from, Observable } from 'rxjs';

const randomEmail = require('random-email')
const crypt = require('../../utils/crypt/cryptDecrypt.js')
@Injectable()
export class ClientService {
  constructor(
  @InjectRepository(Client)
  private readonly repositoryClient: Repository<Client>){}

  async create(createClientDto: CreateClientDto): Promise<Observable<Client>>{
       
    const someRandomMail = randomEmail()
    const clientCreate : CreateClientDto = {
      id: createClientDto.id,
      email: createClientDto.email ?? someRandomMail,
      password: createClientDto.password ? 
                  crypt.encrypt(createClientDto.password):
                  createClientDto.email ? crypt.encrypt(createClientDto.email) : crypt.encrypt(someRandomMail)
    }

    return from(this.repositoryClient.save(clientCreate));
  }

  findAll(): Observable<Client[]> {
    return from(this.repositoryClient.find());
  }

  async findOne(idInput: string) : Promise<Client> | undefined{
    return await (this.repositoryClient.findOne({where:{id:idInput}})) ?? null;
  }

  update(idInput: string, updateClientDto: UpdateClientDto){
    return from(this.repositoryClient.update(idInput, updateClientDto));
  }

  async remove(idInput: string) {
    const entityToDelete = await this.repositoryClient.findOne({where: {id: idInput}})
    this.repositoryClient.remove(entityToDelete)
    return 'Delete successfull';
  }
}
