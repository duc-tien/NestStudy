import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Kích hoạt 'local' strategy khi gắn @UseGuards(LocalAuthGuard) lên route đăng nhập
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
