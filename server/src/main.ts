import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('vPodolske')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('wildfruit')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  app.enableCors({
    origin: [/^(.*)/],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: [
      'Authorization',
      'authorization',
      'Content-Type',
      'Accept',
      'Origin',
      'X-Requested-With',
      'X-Forwarded-For',
    ],
  });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
