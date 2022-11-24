import { CartAbstract } from "src/abstract/cart.abstract";
import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
import { Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Cart extends CartAbstract{
    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]

    @ManyToOne(() => Client, (client) => client.carts)
    client: Client
}
