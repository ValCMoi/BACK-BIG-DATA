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
exports.RateController = void 0;
const common_1 = require("@nestjs/common");
const rate_service_1 = require("./rate.service");
const create_rate_dto_1 = require("./dto/create-rate.dto");
const update_rate_dto_1 = require("./dto/update-rate.dto");
let RateController = class RateController {
    constructor(rateService) {
        this.rateService = rateService;
    }
    create(createRateDto) {
        return this.rateService.create(createRateDto);
    }
    findAll() {
        return this.rateService.findAll();
    }
    findOne(id) {
        return this.rateService.findOne(id);
    }
    update(id, updateRateDto) {
        return this.rateService.update(+id, updateRateDto);
    }
    remove(id) {
        return this.rateService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rate_dto_1.CreateRateDto]),
    __metadata("design:returntype", void 0)
], RateController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RateController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RateController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rate_dto_1.UpdateRateDto]),
    __metadata("design:returntype", void 0)
], RateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RateController.prototype, "remove", null);
RateController = __decorate([
    (0, common_1.Controller)('rate'),
    __metadata("design:paramtypes", [rate_service_1.RateService])
], RateController);
exports.RateController = RateController;
//# sourceMappingURL=rate.controller.js.map