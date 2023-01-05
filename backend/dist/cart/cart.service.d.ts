import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import { Observable } from 'rxjs';
import { Product } from 'src/product/entities/product.entity';
import { Client } from 'src/client/entities/client.entity';
export declare class CartService {
    private readonly cartRepository;
    private readonly productRepository;
    private readonly clientRepository;
    constructor(cartRepository: Repository<Cart>, productRepository: Repository<Product>, clientRepository: Repository<Client>);
    create(createCartDto: CreateCartDto): Promise<Observable<Cart>>;
    findAll(): any;
    findOne(id: number): string;
    update(id: number, updateCartDto: UpdateCartDto): string;
    remove(id: number): string;
}
