import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class TokenGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = request.headers['x-auth-token'];
    console.log(token);
    if (!token) {
      throw new HttpException(
        'X-Auth-Token Başlığı bulunamadı',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return true;
  }
}
