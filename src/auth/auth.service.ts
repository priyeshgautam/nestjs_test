import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from './dto/loginUser.dto';

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
         * 4.generate jwt token --done
         * 5.send in response --done
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

    async loginUser(loginUserDTO: LoginUserDTO) {
        const { email, password } = loginUserDTO;

        const user = await this.userService.findUserByEmail(email);
        console.log("loginUserDTO:", loginUserDTO);
        console.log("Found user:", user);
        if (!user) {
            // Use HttpException with proper status so error is returned to frontend
            throw new ConflictException('Wrong Creds');
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            // Use HttpException with proper status so error is returned to frontend
            throw new ConflictException('Wrong Creds');
        }

        // 3. Generate JWT token
        const payload = { sub: (user as any)._id || (user as any).id };
        const token = await this.jwtService.signAsync(payload);

        return {
            access_token: token
        };
    }
    }
