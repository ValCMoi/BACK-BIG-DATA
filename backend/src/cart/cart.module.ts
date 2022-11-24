import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Cart } from './entities/cart.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({  
  imports:[
  TypeOrmModule.forFeature([Client, Cart, Product])
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
