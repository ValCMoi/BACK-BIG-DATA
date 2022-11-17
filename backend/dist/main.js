"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    const optionsSwagger = new swagger_1.DocumentBuilder();
    optionsSwagger
        .setTitle('API url of : ' + process.env.PROJECT_NAME)
        .setDescription('You can find here all url of the api project here ')
        .build();
    const documentDoc = swagger_1.SwaggerModule.createDocument(app, optionsSwagger);
    swagger_1.SwaggerModule.setup('api', app, documentDoc);
    await app.listen((_a = process.env.NEST_PORT_INIT) !== null && _a !== void 0 ? _a : 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map