import { CartAbstract } from "src/abstract/cart.abstract";
import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from "typeorm";

@Entity()
export class ActualCart extends CartAbstract {
    @OneToOne(() => Client)
    @JoinColumn()
    client:Client

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}
