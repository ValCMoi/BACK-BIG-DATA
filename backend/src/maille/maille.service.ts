import { Injectable } from '@nestjs/common';
import { CreateMailleDto } from './dto/create-maille.dto';
import { UpdateMailleDto } from './dto/update-maille.dto';

@Injectable()
export class MailleService {
  create(createMailleDto: CreateMailleDto) {
    return 'This action adds a new maille';
  }

  findAll() {
    return `This action returns all maille`;
  }

  findOne(id: number) {
    return `This action returns a #${id} maille`;
  }

  update(id: number, updateMailleDto: UpdateMailleDto) {
    return `This action updates a #${id} maille`;
  }

  remove(id: number) {
    return `This action removes a #${id} maille`;
  }
}
