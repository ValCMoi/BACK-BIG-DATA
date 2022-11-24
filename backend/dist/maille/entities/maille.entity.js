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
exports.Maille = void 0;
const categorie_1 = require("../../abstract/categorie");
const univer_entity_1 = require("../../univers/entities/univer.entity");
const typeorm_1 = require("typeorm");
let Maille = class Maille extends categorie_1.Categorie {
};
__decorate([
    (0, typeorm_1.OneToMany)(() => univer_entity_1.Univer, (univers) => univers.maille),
    __metadata("design:type", Array)
], Maille.prototype, "unviers", void 0);
Maille = __decorate([
    (0, typeorm_1.Entity)()
], Maille);
exports.Maille = Maille;
//# sourceMappingURL=maille.entity.js.map