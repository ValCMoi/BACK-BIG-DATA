import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Observable } from 'rxjs';
export declare class ClientService {
    private readonly repositoryClient;
    constructor(repositoryClient: Repository<Client>);
    create(createClientDto: CreateClientDto): Promise<Observable<Client>>;
    findAll(): Observable<Client[]>;
    findOne(idInput: string): Promise<Client> | undefined;
    update(idInput: string, updateClientDto: UpdateClientDto): any;
    remove(idInput: string): Promise<string>;
}
