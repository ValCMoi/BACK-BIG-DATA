import { MailleService } from './maille.service';
import { CreateMailleDto } from './dto/create-maille.dto';
import { UpdateMailleDto } from './dto/update-maille.dto';
export declare class MailleController {
    private readonly mailleService;
    constructor(mailleService: MailleService);
    create(createMailleDto: CreateMailleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMailleDto: UpdateMailleDto): string;
    remove(id: string): string;
}
