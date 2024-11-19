import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'POST',
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
