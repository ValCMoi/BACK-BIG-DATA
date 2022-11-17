import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): import("rxjs").Observable<import("./entities/product.entity").Product>;
    findAll(): import("rxjs").Observable<import("./entities/product.entity").Product[]>;
    findOne(id: string): import("rxjs").Observable<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("./entities/product.entity").Product | "Error not data found to delete">;
}
