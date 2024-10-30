import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedRoleException extends HttpException {
  constructor() {
    super('Bu işlem için yetkiniz yok', HttpStatus.FORBIDDEN);
  }
}
