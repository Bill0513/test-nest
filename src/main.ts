import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    // origin: '*', // 允许任何来源 - 开发时可以，生产环境建议指定明确来源
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // 允许的方法
    credentials: true, // 允许携带凭证 (例如 cookies, Authorization header)
  });
  await app.listen(3000);
}
bootstrap();
