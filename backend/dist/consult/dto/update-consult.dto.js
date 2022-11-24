"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConsultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_consult_dto_1 = require("./create-consult.dto");
class UpdateConsultDto extends (0, swagger_1.PartialType)(create_consult_dto_1.CreateConsultDto) {
}
exports.UpdateConsultDto = UpdateConsultDto;
//# sourceMappingURL=update-consult.dto.js.map