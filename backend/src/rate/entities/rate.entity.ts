import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, Repository } from "typeorm";
@Entity()
export class Rate {
    @PrimaryColumn('uuid')
    @Generated('uuid')
    readonly id: string

    @Column({nullable: false, type: 'integer'})
    rateNumber: number 

    @ManyToOne(() => Client, (client) => client.id)
    client:Client

    @ManyToOne(() => Product, (product: Product) => product.rates)
    product:Product
}
