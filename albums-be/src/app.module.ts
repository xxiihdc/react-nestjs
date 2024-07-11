import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageController } from './image/image.controller';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/userController';

@Module({
  imports: [],
  controllers: [AppController, ImageController, AuthController, UserController],
  providers: [AppService],
})
export class AppModule {}
