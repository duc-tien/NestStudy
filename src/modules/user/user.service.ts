import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import UserDTO from '../../dto/create-user.dto.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  getuser() {
    return 'getuser';
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(userData: UserDTO): Promise<User> {
    const user = this.userRepository.create(userData);
    const hashpassword = await bcrypt.hash(userData.password, 10);
    user.password = hashpassword;
    return this.userRepository.save(user);
  }

  find(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, userData: User) {
    this.userRepository.update(id, userData);
    return this.userRepository.findOneBy({ id });
  }

  findByUsername(username: string) {
    const user = this.userRepository.findOneBy({ username });
    return user;
  }

  async validateUser(username: string, password: string) {
    const user = await this.findByUsername(username);
    if (!user) return null;
    const status = bcrypt.compareSync(password, user.password);
    if (status) return user;
    return null;
  }
}
