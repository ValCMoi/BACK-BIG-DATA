import { CreateUniverDto } from './dto/create-univer.dto';
import { UpdateUniverDto } from './dto/update-univer.dto';
import { Observable } from 'rxjs';
import { Univer } from './entities/univer.entity';
import { Repository } from 'typeorm';
export declare class UniversService {
    private readonly universRepository;
    constructor(universRepository: Repository<Univer>);
    create(createUniverDto: CreateUniverDto): Promise<Observable<Univer>>;
    findAll(): Promise<Observable<Univer[]>>;
    findOne(id: number): string;
    update(id: number, updateUniverDto: UpdateUniverDto): string;
    remove(idInput: string): Promise<string>;
}
