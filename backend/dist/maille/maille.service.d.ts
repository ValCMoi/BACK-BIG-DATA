import { CreateMailleDto } from './dto/create-maille.dto';
import { UpdateMailleDto } from './dto/update-maille.dto';
export declare class MailleService {
    create(createMailleDto: CreateMailleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMailleDto: UpdateMailleDto): string;
    remove(id: number): string;
}
