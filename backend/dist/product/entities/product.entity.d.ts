import { Rate } from "src/rate/entities/rate.entity";
export declare class Product {
    readonly id: string;
    readonly name: string;
    readonly price: number;
    rates: Rate[];
}
