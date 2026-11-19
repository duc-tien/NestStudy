import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service.js';
import { User } from '../../entities/user.entity.js';
import UserDTO from '../../dto/create-user.dto.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  index() {
    return this.userService.findAll();
    // return 'ind';
  }

  @Get('/:id')
  find(@Param('id') id: string) {
    return this.userService.find(+id);
  }

  @Post()
  create(@Body() body: UserDTO) {
    return this.userService.create(body);
  }

  @Patch(':id')
  update(@Body() userData: User, @Param('id') id: number) {
    return this.userService.update(id, userData);
  }
}
