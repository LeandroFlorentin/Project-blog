import { Injectable } from '@nestjs/common';
import { UserLogin } from './user.interfaces';
import prisma from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  loginUsers(user: UserLogin) {
    return {
      info: true,
      msg: "Info OK",
      content: {
        token: prisma.users.findMany()
      }
    }
  }
}
