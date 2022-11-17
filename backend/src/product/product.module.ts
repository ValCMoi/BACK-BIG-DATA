import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Rate } from 'src/rate/entities/rate.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Product, Rate])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
