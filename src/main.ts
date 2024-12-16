import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: [process.env.ALLOWED_HOSTS]
  })
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
