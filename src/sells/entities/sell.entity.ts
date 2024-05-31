import { DeleteDateColumn } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Sell {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer: string;

  @ManyToOne(() => Book, book => book.sell)
  book: Book;

  @DeleteDateColumn()
  deletedAt?: Date;

}
