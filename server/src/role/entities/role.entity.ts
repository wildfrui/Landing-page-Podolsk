import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  value: string;

  @Column()
  description: string;
}
