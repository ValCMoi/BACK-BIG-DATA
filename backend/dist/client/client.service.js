"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("./entities/client.entity");
const rxjs_1 = require("rxjs");
const randomEmail = require('random-email');
const crypt = require('../../utils/crypt/cryptDecrypt.js');
let ClientService = class ClientService {
    constructor(repositoryClient) {
        this.repositoryClient = repositoryClient;
    }
    async create(createClientDto) {
        var _a;
        const someRandomMail = randomEmail();
        const clientCreate = {
            id: createClientDto.id,
            email: (_a = createClientDto.email) !== null && _a !== void 0 ? _a : someRandomMail,
            password: createClientDto.password ?
                crypt.encrypt(createClientDto.password) :
                createClientDto.email ? crypt.encrypt(createClientDto.email) : crypt.encrypt(someRandomMail)
        };
        return (0, rxjs_1.from)(this.repositoryClient.save(clientCreate));
    }
    findAll() {
        return (0, rxjs_1.from)(this.repositoryClient.find());
    }
    async findOne(idInput) {
        var _a;
        return (_a = await (0, rxjs_1.from)(this.repositoryClient.findOne({ where: { id: idInput } }))) !== null && _a !== void 0 ? _a : null;
    }
    update(idInput, updateClientDto) {
        return (0, rxjs_1.from)(this.repositoryClient.update(idInput, updateClientDto));
    }
    async remove(idInput) {
        const entityToDelete = await this.repositoryClient.findOne({ where: { id: idInput } });
        this.repositoryClient.remove(entityToDelete);
        return 'Delete successfull';
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map