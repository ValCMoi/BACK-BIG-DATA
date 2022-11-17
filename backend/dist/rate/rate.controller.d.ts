import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
export declare class RateController {
    private readonly rateService;
    constructor(rateService: RateService);
    create(createRateDto: CreateRateDto): Promise<import("rxjs").Observable<import("./entities/rate.entity").Rate>>;
    findAll(): Promise<import("./entities/rate.entity").Rate[]>;
    findOne(id: string): Promise<import("./entities/rate.entity").Rate>;
    update(id: string, updateRateDto: UpdateRateDto): string;
    remove(id: string): Promise<string>;
}
