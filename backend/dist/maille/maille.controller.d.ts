import { MailleService } from './maille.service';
import { CreateMailleDto } from './dto/create-maille.dto';
import { UpdateMailleDto } from './dto/update-maille.dto';
export declare class MailleController {
    private readonly mailleService;
    constructor(mailleService: MailleService);
    create(createMailleDto: CreateMailleDto): Promise<Observable<import("./entities/maille.entity").Maille>>;
    findAll(): Observable<import("./entities/maille.entity").Maille[]>;
    findOne(id: string): Observable<import("./entities/maille.entity").Maille>;
    update(id: string, updateMailleDto: UpdateMailleDto): string;
    remove(id: string): Promise<string>;
}
