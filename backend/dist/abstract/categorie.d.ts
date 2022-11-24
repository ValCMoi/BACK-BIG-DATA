import { Product } from "src/product/entities/product.entity";
export declare abstract class Categorie {
    id: string;
    label: string;
    products: Product[];
}
