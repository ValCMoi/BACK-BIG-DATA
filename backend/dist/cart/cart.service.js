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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_entity_1 = require("./entities/cart.entity");
const rxjs_1 = require("rxjs");
const product_entity_1 = require("../product/entities/product.entity");
const client_entity_1 = require("../client/entities/client.entity");
let CartService = class CartService {
    constructor(cartRepository, productRepository, clientRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
        this.clientRepository = clientRepository;
    }
    async create(createCartDto) {
        var _a;
        const newCart = new cart_entity_1.Cart();
        newCart.id = createCartDto.id;
        newCart.month = (_a = createCartDto.month) !== null && _a !== void 0 ? _a : 0;
        newCart.products = await this.productRepository.find({ where: { id: (0, typeorm_2.In)(createCartDto.productsId) } });
        return (0, rxjs_1.from)(this.cartRepository.save(newCart));
    }
    findAll() {
        return this.cartRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} cart`;
    }
    update(id, updateCartDto) {
        return `This action updates a #${id} cart`;
    }
    remove(id) {
        return `This action removes a #${id} cart`;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map