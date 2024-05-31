import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Sell } from './entities/sell.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class SellsService {
  constructor(
    @InjectRepository(Sell)
    private sellRepository: Repository<Sell>,
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  @ApiOperation({ summary: 'Create a new sell' })
  @ApiBody({ type: CreateSellDto })
  async create(createSellDto: CreateSellDto): Promise<Sell> {
    const { customer, bookId } = createSellDto;

    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      throw new ForbiddenException(
        'Orders cannot be processed between 6pm and 6am',
      );
    }

    const book = await this.bookRepository.findOne({ where: { id: bookId } });
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    const sell = new Sell();
    sell.customer = customer;
    sell.book = book;

    return this.sellRepository.save(sell);
  }

  @ApiOperation({ summary: 'Get all sells' })
  async findAll(): Promise<Sell[]> {
    return this.sellRepository.find({
      relations: ['book'],
    });
  }

  @ApiOperation({ summary: 'Soft delete sell by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Sell ID' })
  remove(id: number) {
    return this.sellRepository.softDelete(id);
  }
  
}
