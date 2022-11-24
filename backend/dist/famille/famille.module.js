"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilleModule = void 0;
const common_1 = require("@nestjs/common");
const famille_service_1 = require("./famille.service");
const famille_controller_1 = require("./famille.controller");
const typeorm_1 = require("@nestjs/typeorm");
const famille_entity_1 = require("./entities/famille.entity");
const univer_entity_1 = require("../univers/entities/univer.entity");
let FamilleModule = class FamilleModule {
};
FamilleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([famille_entity_1.Famille, univer_entity_1.Univer])
        ],
        controllers: [famille_controller_1.FamilleController],
        providers: [famille_service_1.FamilleService]
    })
], FamilleModule);
exports.FamilleModule = FamilleModule;
//# sourceMappingURL=famille.module.js.map