import { PostEntity } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { domainToASCII } from 'url';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { SearchPostDto } from './dto/search-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>, // private readonly filesService: FilesService,
  ) {}

  async createPost(createPostDto: CreatePostDto) {
    // const filename = await this.filesService.createFile(image);
    const post = await this.postRepository.save({
      ...createPostDto,
    });
    return post;
  }

  async getAllPosts() {
    const posts = await this.postRepository.find();
    const sum = await this.getViewsSum();
    return { posts, sum };
  }

  // async getOnePost(id: number) {
  //   const post = await this.postRepository.findOneBy({ id });
  //   return post;
  // }

  async searchPost(searchPostDto: SearchPostDto) {
    console.log(searchPostDto);
    const qb = this.postRepository.createQueryBuilder('post');
    if (searchPostDto.postTitle) {
      qb.andWhere('post.postTitle ILIKE :postTitle');
    }
    if (searchPostDto.postDescription) {
      qb.andWhere('post.postDescription ILIKE :postDescription');
    }
    qb.setParameters({
      postTitle: `%${searchPostDto.postTitle}%`,
      postDescription: `%${searchPostDto.postDescription}%`,
    });
    console.log(qb.getSql());
    const result = await qb.getMany();
    return result;
  }

  async getViewsSum() {
    const sum = await this.postRepository
      .createQueryBuilder('post')
      .select('SUM(post.views)', 'sum')
      .getRawOne();
    return sum;
  }

  async getPostByTitle(title) {
    const post = await this.postRepository
      .createQueryBuilder('post')
      .where('post.postTitle = :postTitle', { postTitle: title })
      .getOne();
  }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
