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
exports.Consult = void 0;
const cart_abstract_1 = require("../../abstract/cart.abstract");
const client_entity_1 = require("../../client/entities/client.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let Consult = class Consult extends cart_abstract_1.CartAbstract {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, (client) => client.consults),
    __metadata("design:type", client_entity_1.Client)
], Consult.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => product_entity_1.Product),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", product_entity_1.Product)
], Consult.prototype, "product", void 0);
Consult = __decorate([
    (0, typeorm_1.Entity)()
], Consult);
exports.Consult = Consult;
//# sourceMappingURL=consult.entity.js.map