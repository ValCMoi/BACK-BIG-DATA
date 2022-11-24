import { Client } from 'src/client/entities/client.entity';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateActualCartDto } from './dto/create-actual-cart.dto';
import { UpdateActualCartDto } from './dto/update-actual-cart.dto';
import { ActualCart } from './entities/actual-cart.entity';
import { Observable } from 'rxjs';
export declare class ActualCartService {
    private readonly actualCartRepository;
    private readonly clientRepository;
    private readonly productRepository;
    constructor(actualCartRepository: Repository<ActualCart>, clientRepository: Repository<Client>, productRepository: Repository<Product>);
    create(createActualCartDto: CreateActualCartDto): Promise<Observable<ActualCart>>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateActualCartDto: UpdateActualCartDto): string;
    remove(id: string): string;
}
