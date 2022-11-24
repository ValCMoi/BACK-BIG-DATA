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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const famille_entity_1 = require("../famille/entities/famille.entity");
const univer_entity_1 = require("../univers/entities/univer.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductService = class ProductService {
    constructor(productRepository, familleRepository, universRepository) {
        this.productRepository = productRepository;
        this.familleRepository = familleRepository;
        this.universRepository = universRepository;
    }
    async create(createProductDto) {
        const newProduct = new product_entity_1.Product();
        newProduct.name = createProductDto.name;
        newProduct.price = createProductDto.price;
        newProduct.famille = createProductDto.familleId ? await this.familleRepository.findOne({ where: { id: createProductDto.familleId } }) : null;
        newProduct.univers = createProductDto.universId ? await this.universRepository.findOne({ where: { id: createProductDto.universId } }) : null;
        return (0, rxjs_1.from)(this.productRepository.save(newProduct));
    }
    findAll() {
        return (0, rxjs_1.from)(this.productRepository.find({ relations: { rates: true } }));
    }
    findOne(idInput) {
        return (0, rxjs_1.from)(this.productRepository.findOne({ where: { id: idInput } }));
    }
    update(idInput, updateProductDto) {
        return this.productRepository.update(idInput, updateProductDto);
    }
    async remove(idInput) {
        const entityToDelete = await this.productRepository.findOne({ where: { id: idInput } });
        if (entityToDelete !== null) {
            return 'Error not data found to delete';
        }
        return this.productRepository.remove(entityToDelete);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(famille_entity_1.Famille)),
    __param(2, (0, typeorm_1.InjectRepository)(univer_entity_1.Univer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map