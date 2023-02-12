import { PageOptionsDto } from './dto/post-page-options.dto';
import { PostEntity } from './entities/post.entity';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { domainToASCII } from 'url';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { SearchPostDto } from './dto/search-post.dto';
import { PageDto } from './dto/post-page.dto';
import { PageMetaDto } from './dto/post-page-meta.dto';

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
    console.log(post);
    return post;
  }

  async getAllPosts() {
    const posts = await this.postRepository.find();
    const sum = await this.getViewsSum();
    return { posts, sum };
  }

  async paginatePosts(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<CreatePostDto>> {
    console.log(pageOptionsDto.skip);
    const qb = this.postRepository.createQueryBuilder('post');

    qb.skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take)
      .where('post.category = :category', {
        category: pageOptionsDto.category,
      });

    const itemCount = await qb.getCount();
    const { entities } = await qb.getRawAndEntities();
    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });
    const pageDto = new PageDto(entities, pageMetaDto);
    console.log(pageDto);
    return pageDto;
  }

  async getOnePost(id: number) {
    await this.postRepository
      .createQueryBuilder()
      .update()
      .set({
        views: () => 'views + 1',
      })
      .where('id = :id', { id })
      .execute();
    const post = await this.postRepository.findOneBy({ id });
    return post;
  }

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
