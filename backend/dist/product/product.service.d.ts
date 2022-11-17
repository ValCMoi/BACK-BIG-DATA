import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Observable<Product>;
    findAll(): Observable<Product[]>;
    findOne(idInput: string): Observable<Product>;
    update(idInput: string, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(idInput: string): Promise<Product | "Error not data found to delete">;
}
