import { Book } from "src/books/entities/book.entity";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @ManyToMany(() => Book, book => book.author)
  @JoinTable()
  books: Book[];

  @DeleteDateColumn()
  deletedAt?: Date;
}
