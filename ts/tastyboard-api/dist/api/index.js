"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
// api/index.ts
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app.module");
const common_1 = require("@nestjs/common");
const serverless_express_1 = __importDefault(require("@vendia/serverless-express"));
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
let cachedServer;
async function bootstrapServer() {
    const appExpress = (0, express_1.default)();
    const nestApp = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(appExpress));
    nestApp.enableCors();
    nestApp.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    await nestApp.init();
    return (0, serverless_express_1.default)({ app: appExpress });
}
async function handler(req, res) {
    if (!cachedServer)
        cachedServer = await bootstrapServer();
    return cachedServer(req, res);
}
