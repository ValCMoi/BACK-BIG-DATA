import { Repository } from 'typeorm';
import { CreateMailleDto } from './dto/create-maille.dto';
import { UpdateMailleDto } from './dto/update-maille.dto';
import { Maille } from './entities/maille.entity';
import { Observable } from 'rxjs';
export declare class MailleService {
    private readonly mailleRepository;
    constructor(mailleRepository: Repository<Maille>);
    create(createMailleDto: CreateMailleDto): Promise<Observable<Maille>>;
    findAll(): Observable<Maille[]>;
    findOne(idInput: string): Observable<Maille>;
    update(id: number, updateMailleDto: UpdateMailleDto): string;
    remove(idInput: string): Promise<string>;
}
