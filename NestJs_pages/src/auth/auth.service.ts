import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async login(user: any) {
    const payload = {
      userName: user.userName,
      sub: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(userName: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        userName,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      return {
        id: user.id,
        userName: user.userName,
        role: user.role,
      };
    }
    return null;
  }
}
