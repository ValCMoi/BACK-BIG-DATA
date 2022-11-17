import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
export declare class Rate {
    readonly id: string;
    rateNumber: number;
    client: Client;
    product: Product;
}
