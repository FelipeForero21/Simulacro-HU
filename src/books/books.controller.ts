import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {
  ApiOperation,
  ApiTags,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@Controller('books')
@ApiTags('Books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/createBook')
  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({ type: CreateBookDto })
  async create(@Body() createBookDto: CreateBookDto) {
    try {
      return await this.booksService.create(createBookDto);
    } catch (error) {
      throw new BadRequestException('Error creating book');
    }
  }

  @Get('/all')
  @ApiOperation({ summary: 'Get all books' })
  async findAll() {
    try {
      return await this.booksService.findAll();
    } catch (error) {
      throw new NotFoundException('Books not found');
    }
  }

  @Put('/update/:id')
  @ApiOperation({ summary: 'Update book by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Book ID' })
  @ApiBody({ type: UpdateBookDto })
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    try {
      await this.booksService.update(+id, updateBookDto);
      return { message: 'Book updated successfully' };
    } catch (error) {
      throw new BadRequestException('Error updating book');
    }
  }

  @Delete('/softDelete/:id')
  @ApiOperation({ summary: 'Soft delete book by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Book ID' })
  async remove(@Param('id') id: string) {
    try {
      return await this.booksService.remove(+id);
    } catch (error) {
      throw new BadRequestException('Error deleting book');
    }
  }
}
