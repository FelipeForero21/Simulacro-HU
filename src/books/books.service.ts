import { Repository, In } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const { title, author } = createBookDto;
  
    let authorEntity = await this.authorRepository.findOne({ where: { author: author } });
    if (!authorEntity) {
      authorEntity = new Author();
      authorEntity.author = author;
      await this.authorRepository.save(authorEntity);
    }
  
    const book = new Book();
    book.title = title;
    book.author = [authorEntity];
  
    return this.bookRepository.save(book);
  }
  

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({ relations: ['author', 'sell'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<void> {
    const { title, author } = updateBookDto;

    const book = await this.bookRepository.findOne({ where: { id }, relations: ['author'] });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    if (title) {
      book.title = title;
    }

    if (author) {
      let authorEntity = await this.authorRepository.findOne({ where: { author } });
      if (!authorEntity) {
        authorEntity = new Author();
        authorEntity.author = author;
        await this.authorRepository.save(authorEntity);
      }
      book.author = [authorEntity];
    }

    await this.bookRepository.save(book);
  }

  remove(id: number) {
    return this.bookRepository.softDelete(id);
  }
}
