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
exports.FamilleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("typeorm");
const famille_entity_1 = require("./entities/famille.entity");
let FamilleService = class FamilleService {
    constructor(familleRepository) {
        this.familleRepository = familleRepository;
    }
    async create(createFamilleDto) {
        return (0, rxjs_1.from)(this.familleRepository.save(createFamilleDto));
    }
    findAll() {
        return this.familleRepository.find();
    }
    async findOne(idInput) {
        var _a;
        return (_a = await (0, rxjs_1.from)(this.familleRepository.findOne({ where: { id: idInput } }))) !== null && _a !== void 0 ? _a : null;
    }
    update(id, updateFamilleDto) {
        return `This action updates a #${id} famille`;
    }
    async remove(idInput) {
        const entityToDelete = await this.familleRepository.findOne({ where: { id: idInput } });
        this.familleRepository.remove(entityToDelete);
        return 'Delete successfull';
    }
};
FamilleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(famille_entity_1.Famille)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FamilleService);
exports.FamilleService = FamilleService;
//# sourceMappingURL=famille.service.js.map