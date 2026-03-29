import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    getHello(): string {
        return 'Hello World!';
    }
    registerUser() {
        return this.userService.createUser();
    }
}
