import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { UserService } from '../user/user.service.js';
import UserDTO from '../../dto/create-user.dto.js';
import LoginDTO from '../../dto/user-login.dto.js';
import { LocalAuthGuard } from '../../guard/local-auth.guard.js';
import { Public } from '../../decorator/customize.js';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/register')
  register(@Body() userData: UserDTO) {
    return this.userService.create(userData);
  }

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('/login')
  login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@Request() req: any) {
    return req.user;
  }
}
