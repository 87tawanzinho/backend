import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('int')
  age: number;

  @Column({ length: 255 })
  email: string;

  @Column({ default: 'null' })
  password: string;
}
