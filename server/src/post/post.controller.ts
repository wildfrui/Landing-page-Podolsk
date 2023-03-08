import { FilesService } from 'src/files/files.service';
import { UserEntity } from 'src/user/entities/user.entity';
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
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { PageOptionsDto } from './dto/post-page-options.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/config/decorators/user.decorator';
import { diskStorage } from 'multer';

@ApiTags('post-controller')
@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly fileService: FilesService,
  ) {}

  // @ApiOperation({ summary: 'Cоздание поста' })
  // @ApiResponse({ status: 200, type: PostEntity })

  @UseGuards(JwtAuthGuard)
  @Post()
  createPost(@User() user: UserEntity, @Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(user.id, createPostDto);
  }

  // @ApiOperation({ summary: 'Получить все посты' })
  // @ApiResponse({ status: 200, type: [PostEntity] })
  // @Get()
  // getAll() {
  //   return this.postService.getAllPosts();
  // }

  @Post('/cover')
  @UseInterceptors(FileInterceptor('file'))
  uploadPostCover(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.createFile(file, 'covers');
  }

  @Post('/image')
  @UseInterceptors(FileInterceptor('file'))
  uploadImageEditor(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.createFile(file, 'images');
  }

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
