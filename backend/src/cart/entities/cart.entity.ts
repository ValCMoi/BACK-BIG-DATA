import { CartAbstract } from "src/abstract/cart.abstract";
import { Product } from "src/product/entities/product.entity";
import { Entity, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class Cart extends CartAbstract{
    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[]
}
