import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: string;

  @Column()
  description: string;
}
