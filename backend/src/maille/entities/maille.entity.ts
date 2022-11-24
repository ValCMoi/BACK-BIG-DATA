import { Categorie } from "src/abstract/categorie";
import { Univer } from "src/univers/entities/univer.entity";
import { Entity, OneToMany } from "typeorm";

@Entity()
export class Maille extends Categorie {
    @OneToMany(() => Univer, (univers: Univer) => univers.maille)
    unviers: Univer[]
}
