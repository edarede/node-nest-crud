import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './services/logger.service';

async function bootstrap() {
  /*const app = await NestFactory.create(AppModule, {
    logger: new LoggerService() // Creacion de nuestro logger
  });*/
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();  
  await app.listen(3501);
  console.log('Server on port', 3501)
}
bootstrap();
