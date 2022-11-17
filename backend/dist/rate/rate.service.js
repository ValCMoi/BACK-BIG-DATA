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
exports.RateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/entities/client.entity");
const typeorm_2 = require("typeorm");
const rate_entity_1 = require("./entities/rate.entity");
const rxjs_1 = require("rxjs");
const product_entity_1 = require("../product/entities/product.entity");
let RateService = class RateService {
    constructor(rateRepository, clientRepository, productRepository) {
        this.rateRepository = rateRepository;
        this.clientRepository = clientRepository;
        this.productRepository = productRepository;
    }
    async create(createRateDto) {
        const theClient = await this.clientRepository.findOne({ where: { id: createRateDto.clientId } });
        const theProduct = await this.productRepository.findOne({ where: { id: createRateDto.productId } });
        const newRate = new rate_entity_1.Rate();
        newRate.client = theClient;
        newRate.rateNumber = createRateDto.rateNumber;
        newRate.product = theProduct;
        return (0, rxjs_1.from)(this.rateRepository.save(newRate));
    }
    findAll() {
        return this.rateRepository.find({ relations: { client: true, product: true } });
    }
    findOne(idInput) {
        return this.rateRepository.findOne({ where: { id: idInput }, relations: { client: true } });
    }
    update(id, updateRateDto) {
        return `This action updates a #${id} rate`;
    }
    async remove(idInput) {
        const entityToDelete = await this.rateRepository.findOne({ where: { id: idInput } });
        this.rateRepository.remove(entityToDelete);
        return 'Delete successfull';
    }
};
RateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rate_entity_1.Rate)),
    __param(1, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RateService);
exports.RateService = RateService;
//# sourceMappingURL=rate.service.js.map