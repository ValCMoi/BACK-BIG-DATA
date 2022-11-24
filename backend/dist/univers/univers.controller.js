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
exports.UniversController = void 0;
const common_1 = require("@nestjs/common");
const univers_service_1 = require("./univers.service");
const create_univer_dto_1 = require("./dto/create-univer.dto");
const update_univer_dto_1 = require("./dto/update-univer.dto");
let UniversController = class UniversController {
    constructor(universService) {
        this.universService = universService;
    }
    create(createUniverDto) {
        return this.universService.create(createUniverDto);
    }
    findAll() {
        return this.universService.findAll();
    }
    findOne(id) {
        return this.universService.findOne(+id);
    }
    update(id, updateUniverDto) {
        return this.universService.update(+id, updateUniverDto);
    }
    remove(id) {
        return this.universService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_univer_dto_1.CreateUniverDto]),
    __metadata("design:returntype", void 0)
], UniversController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UniversController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UniversController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_univer_dto_1.UpdateUniverDto]),
    __metadata("design:returntype", void 0)
], UniversController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UniversController.prototype, "remove", null);
UniversController = __decorate([
    (0, common_1.Controller)('univers'),
    __metadata("design:paramtypes", [univers_service_1.UniversService])
], UniversController);
exports.UniversController = UniversController;
//# sourceMappingURL=univers.controller.js.map