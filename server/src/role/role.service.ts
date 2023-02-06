import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}

  async createRole(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.save({ ...createRoleDto });
    return role;
  }

  async findAllRoles() {
    const roles = await this.roleRepository.find();
    return roles;
  }

  async findByValue(value: any) {
    const role = this.roleRepository
      .createQueryBuilder('role')
      .where('role.value = :value', { value })
      .getOne();
    return role;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
