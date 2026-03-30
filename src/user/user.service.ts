import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDTO } from '../auth/dto/registerUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser (registerUserDTO: RegisterDTO){
        console.log("DTO from User", registerUserDTO);
        try{
            return await this.userModel.create({
                fname: registerUserDTO.fname,
                lname: registerUserDTO.lname,
                password: registerUserDTO.password,
                email: registerUserDTO.email
            })
        } catch(err){
            console.log(err);
            const DUPLICATE_KEY_CODE = 11000;
            if(err.code === DUPLICATE_KEY_CODE){
                throw new ConflictException('Email is already taken');
            }
            throw err;
        }
    }

    async findUserByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }
}
