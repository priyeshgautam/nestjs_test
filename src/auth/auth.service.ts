import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    getHello(): string {
        return 'Hello World!';
    }
    registerUser(registerUserDTO: RegisterDTO) {
        console.log(registerUserDTO);

        const saltRounds=10;
        const hash = bcrypt.hash(registerUserDTO.password, saltRounds);
        //Steps
        /**
         * 1.check if email exists
         * 2.hash password
         * 3.store user into db
         * 4.generate jwt token
         * 5.send in response
         */
        return this.userService.createUser({...registerUserDTO, password: hash});
    }
}
