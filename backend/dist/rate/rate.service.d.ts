import { Client } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';
import { Observable } from 'rxjs';
export declare class RateService {
    private readonly rateRepository;
    private readonly clientRepository;
    constructor(rateRepository: Repository<Rate>, clientRepository: Repository<Client>);
    create(createRateDto: CreateRateDto): Promise<Observable<Rate>>;
    findAll(): Promise<Rate[]>;
    findOne(idInput: string): Promise<Rate>;
    update(id: number, updateRateDto: UpdateRateDto): string;
    remove(idInput: string): Promise<string>;
}
