import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service'
import { RegisterDTO } from './dto/registerUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {}

  @Get('getHello')
  getHello(){
    return this.authService.getHello();
  }

  @Post('registerUser')
  registerUser(@Body() registerUserDTO: RegisterDTO){
    return this.authService.registerUser(registerUserDTO)
  }

  @Post('LoginUser')
  loginUser(@Body() loginUserDTO: LoginUserDTO){
    return this.authService.loginUser(loginUserDTO)
  }
}
