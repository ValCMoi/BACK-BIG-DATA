import { Observable } from 'rxjs';
import { Famille } from 'src/famille/entities/famille.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private readonly productRepository;
    private readonly familleRepository;
    constructor(productRepository: Repository<Product>, familleRepository: Repository<Famille>);
    create(createProductDto: CreateProductDto): Promise<Observable<Product>>;
    findAll(): Observable<Product[]>;
    findOne(idInput: string): Observable<Product>;
    update(idInput: string, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(idInput: string): Promise<Product | "Error not data found to delete">;
}
