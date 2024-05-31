import { Sell } from 'src/sells/entities/sell.entity';
import { Author } from './../../authors/entities/author.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable()
  author: Author[];

  @OneToMany(() => Sell, (sell) => sell.book)
  sell: Sell[];

  @DeleteDateColumn()
  deletedAt?: Date;
}
