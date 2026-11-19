import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export interface JwtPayload {
  sub: string; // Subject: ID của người dùng
  email: string; // Email người dùng
  role: string; // Vai trò người dùng
}

@Injectable()
// Đăng ký chiến lược tên 'jwt' để kiểm tra Access Token
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      // Lấy token từ header "Authorization: Bearer <token>"
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Không bỏ qua token đã hết hạn (hết hạn sẽ tự động từ chối với lỗi 401)
      ignoreExpiration: false,
      // Lấy secret key từ biến môi trường thông qua ConfigService
      secretOrKey: 'tientesttientesttientesttientest',
    });
  }

  // Chỉ chạy khi chữ ký JWT hợp lệ và token chưa hết hạn; nhận payload đã giải mã
  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
