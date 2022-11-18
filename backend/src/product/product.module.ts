import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Rate } from 'src/rate/entities/rate.entity';
import { Client } from 'src/client/entities/client.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product, Rate, Client])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
