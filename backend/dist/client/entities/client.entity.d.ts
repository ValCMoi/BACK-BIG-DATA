import { Rate } from "src/rate/entities/rate.entity";
export declare class Client {
    readonly id: string;
    readonly email: string;
    readonly password: string;
    rates: Rate[];
}
