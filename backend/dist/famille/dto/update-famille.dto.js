"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFamilleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_famille_dto_1 = require("./create-famille.dto");
class UpdateFamilleDto extends (0, swagger_1.PartialType)(create_famille_dto_1.CreateFamilleDto) {
}
exports.UpdateFamilleDto = UpdateFamilleDto;
//# sourceMappingURL=update-famille.dto.js.map