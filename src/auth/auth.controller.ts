import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Get('getHello')
  getHello(){
    return this.authService.getHello();
  }

  @Get('registerUser')
  registerUser(){
    return this.authService.registerUser()
  }
}
