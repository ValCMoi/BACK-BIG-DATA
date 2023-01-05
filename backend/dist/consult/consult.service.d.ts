import { Client } from 'src/client/entities/client.entity';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';
import { Consult } from './entities/consult.entity';
import { Observable } from 'rxjs';
export declare class ConsultService {
    private readonly clientRepository;
    private readonly productRepository;
    private readonly consultRepository;
    constructor(clientRepository: Repository<Client>, productRepository: Repository<Product>, consultRepository: Repository<Consult>);
    create(createConsultDto: CreateConsultDto): Promise<Observable<Consult>>;
    findAll(): any;
    findOne(idInput: string): any;
    update(id: number, updateConsultDto: UpdateConsultDto): string;
    remove(idInput: string): Promise<string>;
}
