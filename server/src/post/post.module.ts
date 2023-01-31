import { FilesModule } from './../files/files.module';
import { PostEntity } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), FilesModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
