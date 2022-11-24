"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualCartModule = void 0;
const common_1 = require("@nestjs/common");
const actual_cart_service_1 = require("./actual-cart.service");
const actual_cart_controller_1 = require("./actual-cart.controller");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/entities/client.entity");
const cart_entity_1 = require("../cart/entities/cart.entity");
const product_entity_1 = require("../product/entities/product.entity");
const actual_cart_entity_1 = require("./entities/actual-cart.entity");
let ActualCartModule = class ActualCartModule {
};
ActualCartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([client_entity_1.Client, actual_cart_entity_1.ActualCart, cart_entity_1.Cart, product_entity_1.Product])
        ],
        controllers: [actual_cart_controller_1.ActualCartController],
        providers: [actual_cart_service_1.ActualCartService]
    })
], ActualCartModule);
exports.ActualCartModule = ActualCartModule;
//# sourceMappingURL=actual-cart.module.js.map