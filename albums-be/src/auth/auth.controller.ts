import * as jwt from 'jsonwebtoken';
import { Controller, Post, Body, Res} from '@nestjs/common';
import { Response } from 'express'

@Controller('auth')
export class AuthController {
  @Post('/login')
  login(@Body() body: {username: string, password: string}, @Res() res: Response) {
    if(body.username == "error"){
      return res.status(422).json({
        data: null,
        message: "Login error"
      })
    }
    const secretKey = 'jwt_secret_key_123!@#AAAAAAA    :)';
    const token = jwt.sign({ userId: 1, username: 'username' }, secretKey);
    return res.status(200).json({
      data: {token},
      message: "Success"
    })
  }
}
