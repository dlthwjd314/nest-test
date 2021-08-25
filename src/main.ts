// 프로그램의 진입점.
// AppModule 생성하여 서버 시작.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT||3000);
}
bootstrap();
