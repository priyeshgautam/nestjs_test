import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  @Get('getHello')
  getHello(){
    return this.authService.getHello();
  }
}
