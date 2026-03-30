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

    async registerUser(registerUserDTO: RegisterDTO) {
        console.log("DTO from Auth", registerUserDTO);

        const saltRounds=10;
        const hash = await bcrypt.hash(registerUserDTO.password, saltRounds);
        //Steps
        /**
         * 1.check if email exists
         * 2.hash password  --done
         * 3.store user into db --done
         * 4.generate jwt token
         * 5.send in response
         */
        const user= await this.userService.createUser({...registerUserDTO, password: hash});

        console.log('Created User--from userService', user);
        return user;
    }
}
