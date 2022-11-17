import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
export declare class RateController {
    private readonly rateService;
    constructor(rateService: RateService);
    create(createRateDto: CreateRateDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRateDto: UpdateRateDto): string;
    remove(id: string): string;
}
