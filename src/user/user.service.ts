import { Injectable } from '@nestjs/common';
import { RegisterDTO } from '../auth/dto/registerUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser (registerUserDTO: RegisterDTO){
        console.log("DTO from User", registerUserDTO);

        return await this.userModel.create({
            fname: registerUserDTO.fname,
            lname: registerUserDTO.lname,
            password: registerUserDTO.password,
            email: registerUserDTO.email
        })
    }
}
