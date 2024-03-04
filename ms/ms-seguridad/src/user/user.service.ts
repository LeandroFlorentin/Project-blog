import { Injectable } from '@nestjs/common';
import { UserLogin } from './user.interfaces';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {

  }
  loginUsers(user: UserLogin) {
    return {
      info: true,
      msg: "Info OK",
      content: {
        token: this.prisma.users.findMany()
      }
    }
  }
}
