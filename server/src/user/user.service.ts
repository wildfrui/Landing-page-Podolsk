import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private rolesService: RoleService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create({ ...createUserDto });
    const role = await this.rolesService.findByValue('user');
    user.roles = [role];
    await this.userRepository.save(user);
    return user;
  }

  async findAllUsers() {
    const users = await this.userRepository.find({
      relations: { roles: true },
    });
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
