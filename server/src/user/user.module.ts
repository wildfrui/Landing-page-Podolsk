import { AuthModule } from './../auth/auth.module';
import { RoleService } from './../role/role.service';
import { RoleEntity } from './../role/entities/role.entity';
import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RoleEntity]),
    RoleModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
