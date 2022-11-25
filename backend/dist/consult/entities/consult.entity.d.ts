import { CartAbstract } from "src/abstract/cart.abstract";
import { Client } from "src/client/entities/client.entity";
import { Product } from "src/product/entities/product.entity";
export declare class Consult extends CartAbstract {
    client: Client;
    product: Product;
}
