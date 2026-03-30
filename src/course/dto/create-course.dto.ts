import { IS_EMAIL, IS_STRING, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCourseDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsEmail()
    level: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;
}