import { ConsultService } from './consult.service';
import { CreateConsultDto } from './dto/create-consult.dto';
import { UpdateConsultDto } from './dto/update-consult.dto';
export declare class ConsultController {
    private readonly consultService;
    constructor(consultService: ConsultService);
    create(createConsultDto: CreateConsultDto): Promise<Observable<import("./entities/consult.entity").Consult>>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateConsultDto: UpdateConsultDto): string;
    remove(id: string): Promise<string>;
}
