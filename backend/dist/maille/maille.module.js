"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailleModule = void 0;
const common_1 = require("@nestjs/common");
const maille_service_1 = require("./maille.service");
const maille_controller_1 = require("./maille.controller");
let MailleModule = class MailleModule {
};
MailleModule = __decorate([
    (0, common_1.Module)({
        controllers: [maille_controller_1.MailleController],
        providers: [maille_service_1.MailleService]
    })
], MailleModule);
exports.MailleModule = MailleModule;
//# sourceMappingURL=maille.module.js.map