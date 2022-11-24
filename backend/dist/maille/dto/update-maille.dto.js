"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMailleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_maille_dto_1 = require("./create-maille.dto");
class UpdateMailleDto extends (0, swagger_1.PartialType)(create_maille_dto_1.CreateMailleDto) {
}
exports.UpdateMailleDto = UpdateMailleDto;
//# sourceMappingURL=update-maille.dto.js.map