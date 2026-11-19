import { IsNumber, IsString } from 'class-validator';

export default class LoginDTO {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
