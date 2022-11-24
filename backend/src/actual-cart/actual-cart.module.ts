import { Module } from '@nestjs/common';
import { ActualCartService } from './actual-cart.service';
import { ActualCartController } from './actual-cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { Product } from 'src/product/entities/product.entity';
import { ActualCart } from './entities/actual-cart.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Client, ActualCart, Cart, Product])
    ],
  controllers: [ActualCartController],
  providers: [ActualCartService]
})
export class ActualCartModule {}
