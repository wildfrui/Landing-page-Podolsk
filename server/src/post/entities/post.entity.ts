import { Options } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

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

  @ApiProperty({
    example: 'Гид по самому красивому месту Подмосковья',
    description: 'Краткое описание статьи для превью',
  })
  @Column()
  category: string;

  @ApiProperty({
    example: '89',
    description: 'Количество просмотров',
  })
  @Column({ type: 'integer', default: 0 })
  views: number;

  @ApiProperty({
    example: 'Дата',
    description: 'Дата создания поста',
  })
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  // @ApiProperty({
  //   example: 'image',
  //   description: 'Превью',
  // })
  // @Column()
  // postImage: string;
}
