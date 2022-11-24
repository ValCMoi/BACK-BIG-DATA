import { Categorie } from "src/abstract/categorie";
import { Product } from "src/product/entities/product.entity";
import { Univer } from "src/univers/entities/univer.entity";
import { Column, Entity, Generated, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Famille extends Categorie{

    @OneToMany(() => Univer, (univers: Univer) => univers.famille)
    univers: Univer[]

}
