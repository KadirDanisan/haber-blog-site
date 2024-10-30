import { Body, Post, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('register')
  async register(
    @Body() body: { userName: string; password: string; role: string },
  ) {
    const hashedpassword = await bcrypt.hash(body.password, 10);
    const user = await this.prisma.user.create({
      data: {
        userName: body.userName,
        password: hashedpassword,
        role: body.role,
      },
    });
    return user;
  }

  @Post('login')
  async login(@Body() body: { userName: string; password: string }) {
    const user = await this.authService.validateUser(
      body.userName,
      body.password,
    );
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
