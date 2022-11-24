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
exports.Product = void 0;
const famille_entity_1 = require("../../famille/entities/famille.entity");
const maille_entity_1 = require("../../maille/entities/maille.entity");
const rate_entity_1 = require("../../rate/entities/rate.entity");
const univer_entity_1 = require("../../univers/entities/univer.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    (0, typeorm_1.Generated)('uuid'),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "float" }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rate_entity_1.Rate, (rate) => rate.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Product.prototype, "rates", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => famille_entity_1.Famille, (famille) => famille.products),
    __metadata("design:type", famille_entity_1.Famille)
], Product.prototype, "famille", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => univer_entity_1.Univer, (univers) => univers.products),
    __metadata("design:type", univer_entity_1.Univer)
], Product.prototype, "univers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => maille_entity_1.Maille, (maille) => maille.products),
    __metadata("design:type", maille_entity_1.Maille)
], Product.prototype, "maille", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map