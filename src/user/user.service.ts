import { Injectable } from '@nestjs/common';
import { RegisterDTO } from '../auth/dto/registerUser.dto';

@Injectable()
export class UserService {
    createUser(registerUserDTO: RegisterDTO){
        return "User Created"
    }
}
