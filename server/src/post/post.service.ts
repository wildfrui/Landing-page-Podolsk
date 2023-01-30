import { PostEntity } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { domainToASCII } from 'url';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  createPost(createPostDto: CreatePostDto) {
    return this.postRepository.save(createPostDto);
  }

  getAllPosts() {
    return this.postRepository.find();
  }

  getOnePost(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
