import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  firstName: string;
  @Column({ type: 'nvarchar' })
  username: string;

  @Column()
  password: string;

  @Column()
  lastName: string;

  @Column()
  created_at: string;

  @Column({ default: true })
  isActive: boolean;
}
