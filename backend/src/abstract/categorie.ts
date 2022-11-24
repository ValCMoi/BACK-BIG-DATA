import { Product } from "src/product/entities/product.entity"
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm"

export abstract class Categorie {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable:false})
    label: string

    @OneToMany(() => Product, (product) => product.id)
    products:Product[]
}