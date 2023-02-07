import { UserEntity } from './user/entities/user.entity';
import { PostEntity } from './post/entities/post.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';
import { FilesModule } from './files/files.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { RoleEntity } from './role/entities/role.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [PostEntity, UserEntity, RoleEntity],
      synchronize: true,
    }),
    PostModule,
    FilesModule,
    UserModule,
    RoleModule,
    AuthModule,
  ],
})
export class AppModule {}
