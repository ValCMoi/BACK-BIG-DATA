import { Module } from '@nestjs/common';
import { ConsultService } from './consult.service';
import { ConsultController } from './consult.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/client/entities/client.entity';
import { ActualCart } from 'src/actual-cart/entities/actual-cart.entity';
import { Cart } from 'src/cart/entities/cart.entity';
import { Product } from 'src/product/entities/product.entity';
import { Consult } from './entities/consult.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Client, Consult, Cart, Product])
    ],
  controllers: [ConsultController],
  providers: [ConsultService]
})
export class ConsultModule {}
