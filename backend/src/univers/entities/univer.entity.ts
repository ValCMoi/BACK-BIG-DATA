import { Categorie } from "src/abstract/categorie";
import { Famille } from "src/famille/entities/famille.entity";
import { Maille } from "src/maille/entities/maille.entity";
import { Product } from "src/product/entities/product.entity";
import {Entity, ManyToOne, OneToMany} from "typeorm";
@Entity()
export class Univer extends Categorie{

    @ManyToOne(() => Famille, (famille: Famille) => famille.univers)
    famille: Famille

    @ManyToOne(() => Maille, (maille: Maille) => maille.unviers)
    maille: Maille


}
