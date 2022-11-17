import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
export declare class RateService {
    create(createRateDto: CreateRateDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRateDto: UpdateRateDto): string;
    remove(id: number): string;
}
