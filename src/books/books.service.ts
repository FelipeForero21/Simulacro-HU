import { Repository, In } from 'typeorm';
import { Injectable } from '@nestjs/common';
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
  
    // Buscar o crear el autor según sea necesario
    let authorEntity = await this.authorRepository.findOne({ where: { author: author } });
    if (!authorEntity) {
      authorEntity = new Author();
      authorEntity.author = author;
      await this.authorRepository.save(authorEntity);
    }
  
    const book = new Book();
    book.title = title;
    book.author = [authorEntity];
  
    // Guardar el libro en la base de datos
    return this.bookRepository.save(book);
  }
  

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
