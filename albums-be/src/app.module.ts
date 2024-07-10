import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './image/image.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, ImageController, AuthController],
  providers: [AppService],
})
export class AppModule {}
