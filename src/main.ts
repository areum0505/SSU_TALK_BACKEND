import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('SSU-Talk API')
    .setDescription('SSU-Talk 백엔드 API 문서입니다.')
    .setVersion('1.0')
    .addTag('posts') // 태그는 선택
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document); // /api-docs 경로로 접속 가능

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
