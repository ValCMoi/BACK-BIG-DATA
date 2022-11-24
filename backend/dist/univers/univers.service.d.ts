import { CreateUniverDto } from './dto/create-univer.dto';
import { UpdateUniverDto } from './dto/update-univer.dto';
export declare class UniversService {
    create(createUniverDto: CreateUniverDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUniverDto: UpdateUniverDto): string;
    remove(id: number): string;
}
