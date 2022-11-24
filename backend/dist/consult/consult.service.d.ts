import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';
export declare class ConsultService {
    create(createConsultDto: CreateConsultDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConsultDto: UpdateConsultDto): string;
    remove(id: number): string;
}
