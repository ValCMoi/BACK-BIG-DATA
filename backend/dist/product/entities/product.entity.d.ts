import { Famille } from "src/famille/entities/famille.entity";
import { Maille } from "src/maille/entities/maille.entity";
import { Rate } from "src/rate/entities/rate.entity";
import { Univer } from "src/univers/entities/univer.entity";
export declare class Product {
    readonly id: string;
    name: string;
    price: number;
    rates: Rate[];
    famille: Famille;
    univers: Univer;
    maille: Maille;
}
