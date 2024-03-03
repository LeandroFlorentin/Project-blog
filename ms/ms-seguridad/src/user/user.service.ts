import { Injectable } from '@nestjs/common';
import { UserLogin } from './user.interfaces';

@Injectable()
export class UserService {
  loginUsers(user: UserLogin) {
    return {
      info: true,
      msg: "Info OK",
      content: {
        token: user
      }
    }
  }
}
