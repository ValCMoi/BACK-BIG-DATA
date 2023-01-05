import { FamilleService } from './famille.service';
import { CreateFamilleDto } from './dto/create-famille.dto';
import { UpdateFamilleDto } from './dto/update-famille.dto';
export declare class FamilleController {
    private readonly familleService;
    constructor(familleService: FamilleService);
    create(createFamilleDto: CreateFamilleDto): Promise<import("rxjs").Observable<import("./entities/famille.entity").Famille>>;
    findAll(): Promise<import("./entities/famille.entity").Famille[]>;
    findOne(id: string): Promise<import("rxjs").Observable<import("./entities/famille.entity").Famille>>;
    update(id: string, updateFamilleDto: UpdateFamilleDto): string;
    remove(id: string): Promise<string>;
}
