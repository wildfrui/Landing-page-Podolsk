import { PageDto } from './dto/post-page.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { PostEntity } from './entities/post.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { PageOptionsDto } from './dto/post-page-options.dto';

@ApiTags('post-controller')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'Cоздание поста' })
  @ApiResponse({ status: 200, type: PostEntity })
  // @UseInterceptors(FileInterceptor('image'))
  @Post()
  create(
    @Body() createPostDto: CreatePostDto,
    // @UploadedFile() image: Express.Multer.File,
  ) {
    return this.postService.createPost(createPostDto);
  }

  // @ApiOperation({ summary: 'Получить все посты' })
  // @ApiResponse({ status: 200, type: [PostEntity] })
  // @Get()
  // getAll() {
  //   return this.postService.getAllPosts();
  // }

  @Get()
  async getWithPaginate(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<CreatePostDto>> {
    return this.postService.paginatePosts(pageOptionsDto);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.postService.getOnePost(id);
  }

  @Get('/search')
  searchPost(@Query() SearchPostDto: SearchPostDto) {
    return this.postService.searchPost(SearchPostDto);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postService.remove(+id);
  // }
}
