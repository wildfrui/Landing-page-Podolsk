import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity("files")
export class LocalFileEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  mimetype: string;
}
