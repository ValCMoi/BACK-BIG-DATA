import { ActualCartService } from './actual-cart.service';
import { CreateActualCartDto } from './dto/create-actual-cart.dto';
import { UpdateActualCartDto } from './dto/update-actual-cart.dto';
export declare class ActualCartController {
    private readonly actualCartService;
    constructor(actualCartService: ActualCartService);
    create(createActualCartDto: CreateActualCartDto): Promise<Observable<import("./entities/actual-cart.entity").ActualCart>>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateActualCartDto: UpdateActualCartDto): string;
    remove(id: string): string;
}
