import { Categorie } from "src/abstract/categorie";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, Generated, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Famille extends Categorie{
}
