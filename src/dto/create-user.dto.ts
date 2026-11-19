import { IsBoolean, IsNumber, IsString } from 'class-validator';

export default class UserDTO {
  @IsNumber()
  id: number;
  @IsString()
  firstName: string;
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsString()
  lastName: string;
  @IsString()
  created_at: string;
  @IsBoolean()
  isActive: boolean;
}
