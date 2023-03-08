import { UserEntity } from './../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity('posts')
export class PostEntity {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор статьи' })
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { cascade: true, eager: true })
  author: UserEntity;

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
  @Column({ type: 'jsonb' })
  body: any[];

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
