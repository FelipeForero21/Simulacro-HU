import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException, BadRequestException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post("/createBook")
  async create(@Body() createBookDto: CreateBookDto) {
    try {
      return await this.booksService.create(createBookDto);
    } catch (error) {
      throw new BadRequestException('Error creating book');
    }
  }

  @Get("/all")
  async findAll() {
    try {
      return await this.booksService.findAll();
    } catch (error) {
      throw new NotFoundException('Books not found');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.booksService.findOne(+id);
    } catch (error) {
      throw new NotFoundException('Book not found');
    }
  }

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    try {
      await this.booksService.update(+id, updateBookDto);
      return { message: 'Book updated successfully' };
    } catch (error) {
      throw new BadRequestException('Error updating book');
    }
  }

  @Delete('/softDelete/:id')
  async remove(@Param('id') id: string) {
    try {
      return await this.booksService.remove(+id);
    } catch (error) {
      throw new BadRequestException('Error deleting book');
    }
  }
}
