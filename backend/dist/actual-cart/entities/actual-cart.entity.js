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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualCart = void 0;
const cart_abstract_1 = require("../../abstract/cart.abstract");
const client_entity_1 = require("../../client/entities/client.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let ActualCart = class ActualCart extends cart_abstract_1.CartAbstract {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => client_entity_1.Client),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", client_entity_1.Client)
], ActualCart.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.Product),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ActualCart.prototype, "products", void 0);
ActualCart = __decorate([
    (0, typeorm_1.Entity)()
], ActualCart);
exports.ActualCart = ActualCart;
//# sourceMappingURL=actual-cart.entity.js.map