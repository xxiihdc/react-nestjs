import * as jwt from 'jsonwebtoken';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/login')
  login() {
    const secretKey = 'jwt_secret_key_123!@#AAAAAAA    :)';
    const token = jwt.sign({ userId: 1, username: 'username' }, secretKey);
    return token;
  }
}
