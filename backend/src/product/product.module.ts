import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Rate } from 'src/rate/entities/rate.entity';
import { Client } from 'src/client/entities/client.entity';
import { Famille } from 'src/famille/entities/famille.entity';
import { Univer } from 'src/univers/entities/univer.entity';
import { Maille } from 'src/maille/entities/maille.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product, Rate, Client, Famille, Univer, Maille])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
