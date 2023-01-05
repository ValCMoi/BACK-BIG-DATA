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
exports.ConsultService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/entities/client.entity");
const product_entity_1 = require("../product/entities/product.entity");
const typeorm_2 = require("typeorm");
const consult_entity_1 = require("./entities/consult.entity");
const rxjs_1 = require("rxjs");
let ConsultService = class ConsultService {
    constructor(clientRepository, productRepository, consultRepository) {
        this.clientRepository = clientRepository;
        this.productRepository = productRepository;
        this.consultRepository = consultRepository;
    }
    async create(createConsultDto) {
        const newConsult = new consult_entity_1.Consult();
        newConsult.id = '' + Math.floor(Math.random() * 1000000);
        newConsult.month = createConsultDto.month;
        newConsult.client = await this.clientRepository.findOne({ where: { id: createConsultDto.idClient } });
        newConsult.product = await this.productRepository.findOne({ where: { id: createConsultDto.productId } });
        return (0, rxjs_1.from)(this.consultRepository.save(newConsult));
    }
    findAll() {
        return this.consultRepository.find();
    }
    findOne(idInput) {
        return this.consultRepository.find({ where: { id: idInput } });
    }
    update(id, updateConsultDto) {
        return `This action updates a #${id} consult`;
    }
    async remove(idInput) {
        const entityToDelete = await this.consultRepository.findOne({ where: { id: idInput } });
        this.consultRepository.remove(entityToDelete);
        return 'Delete successfull';
    }
};
ConsultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectRepository)(consult_entity_1.Consult)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ConsultService);
exports.ConsultService = ConsultService;
//# sourceMappingURL=consult.service.js.map