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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const maille_entity_1 = require("./entities/maille.entity");
const rxjs_1 = require("rxjs");
let MailleService = class MailleService {
    constructor(mailleRepository) {
        this.mailleRepository = mailleRepository;
    }
    async create(createMailleDto) {
        return (0, rxjs_1.from)(this.mailleRepository.save(createMailleDto));
    }
    findAll() {
        return (0, rxjs_1.from)(this.mailleRepository.find());
    }
    findOne(idInput) {
        return (0, rxjs_1.from)(this.mailleRepository.findOne({ where: { id: idInput } }));
    }
    update(id, updateMailleDto) {
        return `This action updates a #${id} maille`;
    }
    async remove(idInput) {
        const entityToDelete = await this.mailleRepository.findOne({ where: { id: idInput } });
        this.mailleRepository.remove(entityToDelete);
        return 'Delete successfull';
    }
};
MailleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(maille_entity_1.Maille)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MailleService);
exports.MailleService = MailleService;
//# sourceMappingURL=maille.service.js.map