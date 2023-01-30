import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор статьи' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Жемчужина Подмосковья',
    description: 'Название статьи',
  })
  @Column()
  postTitle: string;

  @ApiProperty({
    example: 'Гид по самому красивому месту Подмосковья',
    description: 'Краткое описание статьи для превью',
  })
  @Column()
  postDescription: string;
}
