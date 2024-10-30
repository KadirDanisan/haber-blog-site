import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Role } from 'src/auth/roles.enum';
import { UnauthorizedRoleException } from 'src/exceptions/unauthorized-role.exceptions';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TokenGuard } from 'src/guards/token.guard';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: Request) {
    const user = req.user;
    if (user.role !== Role.Admin) {
      throw new UnauthorizedRoleException();
    }
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req: Request) {
    const user = req.user;
    return this.userService.findUserById(user.id);
  }

  @UseGuards(TokenGuard)
  @Get('check-header')
  checkHeader(@Req() req: Request) {
    return { message: 'Api İçindesin' };
  }
}
