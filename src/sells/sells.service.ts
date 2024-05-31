import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Sell } from './entities/sell.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual  } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class SellsService {
  constructor(
    @InjectRepository(Sell)
    private sellRepository: Repository<Sell>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createSellDto: CreateSellDto): Promise<Sell> {
    const { customer, bookId } = createSellDto;

    const book = await this.bookRepository.findOne({ where: { id: bookId } });
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    const sell = new Sell();
    sell.customer = customer;
    sell.book = book;

    return this.sellRepository.save(sell);
  }



  findAll() {
    return `This action returns all sells`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sell`;
  }

  update(id: number, updateSellDto: UpdateSellDto) {
    return `This action updates a #${id} sell`;
  }

  remove(id: number) {
    return `This action removes a #${id} sell`;
  }





}
