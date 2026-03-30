import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service'
import { RegisterDTO } from './dto/registerUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';
import { Roles } from './roles.decorator';
import { Role } from 'src/user/user.types';
import { Throttle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
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

  @Throttle({ default: { limit: 3, ttl: 60 } })
  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req){
    const userId = req.user.sub;
    const user = await this.userService.getUserById(userId);
    return {
        ...user,
        password: null
    };
  }
}
