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
exports.Univer = void 0;
const categorie_1 = require("../../abstract/categorie");
const famille_entity_1 = require("../../famille/entities/famille.entity");
const maille_entity_1 = require("../../maille/entities/maille.entity");
const typeorm_1 = require("typeorm");
let Univer = class Univer extends categorie_1.Categorie {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => famille_entity_1.Famille, (famille) => famille.univers),
    __metadata("design:type", famille_entity_1.Famille)
], Univer.prototype, "famille", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => maille_entity_1.Maille, (maille) => maille.unviers),
    __metadata("design:type", maille_entity_1.Maille)
], Univer.prototype, "maille", void 0);
Univer = __decorate([
    (0, typeorm_1.Entity)()
], Univer);
exports.Univer = Univer;
//# sourceMappingURL=univer.entity.js.map