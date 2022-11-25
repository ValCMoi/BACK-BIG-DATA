import { Cart } from "src/cart/entities/cart.entity";
import { Consult } from "src/consult/entities/consult.entity";
import { Rate } from "src/rate/entities/rate.entity";
export declare class Client {
    readonly id: string;
    readonly email: string;
    readonly password: string;
    rates: Rate[];
    carts: Cart[];
    consults: Consult[];
}
