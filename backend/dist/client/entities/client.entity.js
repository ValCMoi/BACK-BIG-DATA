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
exports.Client = void 0;
const cart_entity_1 = require("../../cart/entities/cart.entity");
const rate_entity_1 = require("../../rate/entities/rate.entity");
const typeorm_1 = require("typeorm");
let Client = class Client {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Client.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Client.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rate_entity_1.Rate, (rate) => rate.id),
    __metadata("design:type", Array)
], Client.prototype, "rates", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.Cart, (cart) => cart.id),
    __metadata("design:type", Array)
], Client.prototype, "carts", void 0);
Client = __decorate([
    (0, typeorm_1.Entity)()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.entity.js.map