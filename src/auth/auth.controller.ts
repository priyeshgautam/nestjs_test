import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service'
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Get('getHello')
  getHello(){
    return this.authService.getHello();
  }

  registerUser(){
    this.userService.createUser()
  }
}
