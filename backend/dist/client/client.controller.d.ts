import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    create(createClientDto: CreateClientDto): Promise<import("rxjs").Observable<import("./entities/client.entity").Client>>;
    findAll(): import("rxjs").Observable<import("./entities/client.entity").Client[]>;
    findOne(id: string): import("rxjs").Observable<import("./entities/client.entity").Client>;
    update(id: string, updateClientDto: UpdateClientDto): import("rxjs").Observable<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
