import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://blogify-assessment-test-client.vercel.app',
    ],
  });
  await app.listen(8000);
}
bootstrap();
