import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {}

    getHello(): string {
        return 'Hello World!';
    }

    async registerUser(registerUserDTO: RegisterDTO) {
        console.log("DTO from Auth", registerUserDTO);

        const saltRounds=10;
        const hash = await bcrypt.hash(registerUserDTO.password, saltRounds);
        //Steps
        /**
         * 1.check if email exists --done
         * 2.hash password  --done
         * 3.store user into db --done
         * 4.generate jwt token
         * 5.send in response
         */
        const user= await this.userService.createUser({...registerUserDTO, password: hash});

        console.log('Created User--from userService', user);
        const payload = { sub: user._id };
        const token = await await this.jwtService.signAsync(payload);
        console.log('TOken--', token)
        return {
            access_token: token
        };
    }
}
