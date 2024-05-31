import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  @ApiOperation({ summary: 'Create a new book' }) // Documenta el método create
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const { title, author } = createBookDto;

    let authorEntity = await this.authorRepository.findOne({
      where: { author: author },
    });
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

  @ApiOperation({ summary: 'Get all books' }) // Documenta el método findAll
  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({ relations: ['author', 'sell'] });
  }

  @ApiOperation({ summary: 'Update book by ID' }) // Documenta el método update
  @ApiParam({ name: 'id', type: 'number', description: 'Book ID' })
  async update(id: number, updateBookDto: UpdateBookDto): Promise<void> {
    const { title, author } = updateBookDto;

    const book = await this.bookRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    if (title) {
      book.title = title;
    }

    if (author) {
      let authorEntity = await this.authorRepository.findOne({
        where: { author },
      });
      if (!authorEntity) {
        authorEntity = new Author();
        authorEntity.author = author;
        await this.authorRepository.save(authorEntity);
      }
      book.author = [authorEntity];
    }

    await this.bookRepository.save(book);
  }

  @ApiOperation({ summary: 'Soft delete book by ID' }) // Documenta el método remove
  @ApiParam({ name: 'id', type: 'number', description: 'Book ID' })
  remove(id: number) {
    return this.bookRepository.softDelete(id);
  }
}
