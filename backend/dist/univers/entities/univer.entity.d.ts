import { Categorie } from "src/abstract/categorie";
import { Famille } from "src/famille/entities/famille.entity";
import { Maille } from "src/maille/entities/maille.entity";
export declare class Univer extends Categorie {
    famille: Famille;
    maille: Maille;
}
