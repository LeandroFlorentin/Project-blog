import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLogin } from './user.interfaces';

@Controller('users')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Post("/login")
  UserLogin(@Body() user: UserLogin) {
    return this.userService.loginUsers(user);
  }

}
