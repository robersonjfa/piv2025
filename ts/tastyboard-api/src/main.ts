// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  await app.listen(3001);
  console.log('🚀 API local em http://localhost:3001');
}

// Evita iniciar servidor ao rodar como Serverless na Vercel
if (!process.env.VERCEL) {
  bootstrap();
}

export {}; // mantém o arquivo como módulo