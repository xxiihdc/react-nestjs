import { Controller, Get, Res} from '@nestjs/common';

@Controller('users')
export class AuthController {
  @Get()
  show(){
    return "do nothing";
  }
}
