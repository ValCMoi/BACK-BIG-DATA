import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';
import { Observable } from 'rxjs';
import { Product } from 'src/product/entities/product.entity';
export declare class RateService {
    private readonly rateRepository;
    private readonly clientRepository;
    private readonly productRepository;
    constructor(rateRepository: Repository<Rate>, clientRepository: Repository<Client>, productRepository: Repository<Product>);
    create(createRateDto: CreateRateDto): Promise<Observable<Rate>>;
    findAll(): Promise<Rate[]>;
    findOne(idInput: string): Promise<Rate>;
    update(id: number, updateRateDto: UpdateRateDto): string;
    remove(idInput: string): Promise<string>;
}
