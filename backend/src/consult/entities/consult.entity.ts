import { CartAbstract } from "src/abstract/cart.abstract";
import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity()
export class Consult extends CartAbstract {

    @ManyToOne(() => Client, (client: Client) => client.consults)
    client: Client

    @OneToOne(() => Product)
    @JoinColumn()
    product:Product
}
