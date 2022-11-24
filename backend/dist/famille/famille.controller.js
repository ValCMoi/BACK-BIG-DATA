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
exports.FamilleController = void 0;
const common_1 = require("@nestjs/common");
const famille_service_1 = require("./famille.service");
const create_famille_dto_1 = require("./dto/create-famille.dto");
const update_famille_dto_1 = require("./dto/update-famille.dto");
let FamilleController = class FamilleController {
    constructor(familleService) {
        this.familleService = familleService;
    }
    create(createFamilleDto) {
        return this.familleService.create(createFamilleDto);
    }
    findAll() {
        return this.familleService.findAll();
    }
    findOne(id) {
        return this.familleService.findOne(id);
    }
    update(id, updateFamilleDto) {
        return this.familleService.update(+id, updateFamilleDto);
    }
    remove(id) {
        return this.familleService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_famille_dto_1.CreateFamilleDto]),
    __metadata("design:returntype", void 0)
], FamilleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FamilleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamilleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_famille_dto_1.UpdateFamilleDto]),
    __metadata("design:returntype", void 0)
], FamilleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FamilleController.prototype, "remove", null);
FamilleController = __decorate([
    (0, common_1.Controller)('famille'),
    __metadata("design:paramtypes", [famille_service_1.FamilleService])
], FamilleController);
exports.FamilleController = FamilleController;
//# sourceMappingURL=famille.controller.js.map