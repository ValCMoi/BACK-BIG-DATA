import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { CreateRateDto } from "../dto/create-rate.dto";

@Entity()
export class Rate {

    @PrimaryColumn('uuid')
    @Generated('uuid')
    readonly id: string

    @Column({nullable: false, type: 'integer'})
    rateNumber: number 

    @ManyToOne(() => Client, (client) => client.id)
    client:Client

    @ManyToOne(() => Product, (product: Product) => product.id)
    product:Product
}
