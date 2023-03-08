import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { RoleService } from 'src/role/role.service';
import { AddRoleDto } from './dto/add-role.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private roleService: RoleService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 5);
    const user = this.userRepository.create({
      name: createUserDto.name,
      password: hashPassword,
      email: createUserDto.email,
    });
    const role = await this.roleService.findByValue('user');
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

  async findOneUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email: email },
      relations: { roles: true },
    });
    return user;
  }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.userRepository.findOne({
      where: { id: addRoleDto.userId },
      relations: { roles: true },
    });
    const role = await this.roleService.findByValue(addRoleDto.value);
    if (user && role) {
      user.roles.push(role);
      await this.userRepository.save(user);
      return addRoleDto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
