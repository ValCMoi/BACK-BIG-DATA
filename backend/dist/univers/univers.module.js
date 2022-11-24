"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversModule = void 0;
const common_1 = require("@nestjs/common");
const univers_service_1 = require("./univers.service");
const univers_controller_1 = require("./univers.controller");
const typeorm_1 = require("@nestjs/typeorm");
const famille_entity_1 = require("../famille/entities/famille.entity");
const univer_entity_1 = require("./entities/univer.entity");
const maille_entity_1 = require("../maille/entities/maille.entity");
let UniversModule = class UniversModule {
};
UniversModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([univer_entity_1.Univer, famille_entity_1.Famille, maille_entity_1.Maille])
        ],
        controllers: [univers_controller_1.UniversController],
        providers: [univers_service_1.UniversService]
    })
], UniversModule);
exports.UniversModule = UniversModule;
//# sourceMappingURL=univers.module.js.map