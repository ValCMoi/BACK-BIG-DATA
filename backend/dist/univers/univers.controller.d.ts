import { UniversService } from './univers.service';
import { CreateUniverDto } from './dto/create-univer.dto';
import { UpdateUniverDto } from './dto/update-univer.dto';
export declare class UniversController {
    private readonly universService;
    constructor(universService: UniversService);
    create(createUniverDto: CreateUniverDto): Promise<import("rxjs").Observable<import("./entities/univer.entity").Univer>>;
    findAll(): Promise<import("rxjs").Observable<import("./entities/univer.entity").Univer[]>>;
    findOne(id: string): string;
    update(id: string, updateUniverDto: UpdateUniverDto): string;
    remove(id: string): string;
}
