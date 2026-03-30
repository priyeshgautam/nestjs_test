import { IS_EMAIL, IS_STRING, IsEmail, IsString } from "class-validator";

export class LoginUserDTO{
    @IsEmail()
    email: string;
    @IsString()
    password: string;
}