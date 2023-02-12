import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'Жемчужина Подмосковья',
    description: 'Название статьи',
  })
  readonly postTitle: string;

  @ApiProperty({
    example: 'Гид по самому красивому месту Подмосковья',
    description: 'Краткое описание статьи для превью',
  })
  readonly postDescription: string;

  @ApiProperty({
    example: 'Гид по самому красивому месту Подмосковья',
    description: 'Краткое описание статьи для превью',
  })
  readonly category: string;
}
