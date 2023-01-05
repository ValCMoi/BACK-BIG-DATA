import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<Observable<import("./entities/product.entity").Product>>;
    findAll(): Observable<import("./entities/product.entity").Product[]>;
    findOne(id: string): Observable<import("./entities/product.entity").Product>;
    update(id: string, updateProductDto: UpdateProductDto): any;
    remove(id: string): Promise<any>;
}
