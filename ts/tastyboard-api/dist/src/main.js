"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await app.listen(3001);
    console.log('🚀 API local em http://localhost:3001');
}
// Não levanta servidor HTTP na Vercel (serverless)
if (!process.env.VERCEL) {
    bootstrap();
}
