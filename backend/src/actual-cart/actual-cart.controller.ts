import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActualCartService } from './actual-cart.service';
import { CreateActualCartDto } from './dto/create-actual-cart.dto';
import { UpdateActualCartDto } from './dto/update-actual-cart.dto';

@Controller('actual-cart')
export class ActualCartController {
  constructor(private readonly actualCartService: ActualCartService) {}

  @Post()
  create(@Body() createActualCartDto: CreateActualCartDto) {
    return this.actualCartService.create(createActualCartDto);
  }

  @Get()
  findAll() {
    return this.actualCartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actualCartService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActualCartDto: UpdateActualCartDto) {
    return this.actualCartService.update(id, updateActualCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actualCartService.remove(id);
  }
}
