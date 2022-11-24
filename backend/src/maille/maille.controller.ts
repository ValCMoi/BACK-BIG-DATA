import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailleService } from './maille.service';
import { CreateMailleDto } from './dto/create-maille.dto';
import { UpdateMailleDto } from './dto/update-maille.dto';

@Controller('maille')
export class MailleController {
  constructor(private readonly mailleService: MailleService) {}

  @Post()
  create(@Body() createMailleDto: CreateMailleDto) {
    return this.mailleService.create(createMailleDto);
  }

  @Get()
  findAll() {
    return this.mailleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailleDto: UpdateMailleDto) {
    return this.mailleService.update(+id, updateMailleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailleService.remove(id);
  }
}
