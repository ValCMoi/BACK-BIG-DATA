import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateFamilleDto } from './dto/create-famille.dto';
import { UpdateFamilleDto } from './dto/update-famille.dto';
import { Famille } from './entities/famille.entity';
export declare class FamilleService {
    private readonly familleRepository;
    constructor(familleRepository: Repository<Famille>);
    create(createFamilleDto: CreateFamilleDto): Promise<Observable<Famille>>;
    findAll(): Promise<Famille[]>;
    findOne(idInput: string): Promise<any>;
    update(id: number, updateFamilleDto: UpdateFamilleDto): string;
    remove(idInput: string): Promise<string>;
}
