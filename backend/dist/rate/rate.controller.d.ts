import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
export declare class RateController {
    private readonly rateService;
    constructor(rateService: RateService);
    create(createRateDto: CreateRateDto): Promise<Observable<import("./entities/rate.entity").Rate>>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateRateDto: UpdateRateDto): Promise<any>;
    remove(id: string): Promise<string>;
}
