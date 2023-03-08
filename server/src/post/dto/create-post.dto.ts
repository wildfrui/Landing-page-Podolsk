import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @ApiProperty({
    example: 'Жемчужина Подмосковья',
    description: 'Название статьи',
  })
  readonly postTitle: string;

  // @IsString()
  // @ApiProperty({
  //   example: 'Гид по самому красивому месту Подмосковья',
  //   description: 'Краткое описание статьи для превью',
  // })
  readonly postDescription: string;

  @IsArray()
  @ApiProperty({
    example: 'Гид по самому красивому месту Подмосковья',
    description: 'Краткое описание статьи для превью',
  })
  readonly body: any[];

  @IsString()
  @ApiProperty({
    example: 'Гид по самому красивому месту Подмосковья',
    description: 'Краткое описание статьи для превью',
  })
  readonly category: string;
}
