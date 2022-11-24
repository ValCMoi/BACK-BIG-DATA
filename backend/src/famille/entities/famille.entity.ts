import { Categorie } from "src/abstract/categorie";
import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class Famille extends Categorie{}
