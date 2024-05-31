import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  @ApiOperation({ summary: 'Create a new author' })
  async create(createAuthorDto: CreateAuthorDto) {
    try {
      const newAuthor = await this.authorRepository.save(createAuthorDto);
      return newAuthor;
    } catch (error) {
      throw new Error('Error creating author');
    }
  }

  @ApiOperation({ summary: 'Get all authors' })
  async findAll(): Promise<Author[]> {
    try {
      const authors = await this.authorRepository.find();
      return authors;
    } catch (error) {
      throw new Error('Error finding authors');
    }
  }

  @ApiOperation({ summary: 'Update an author by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Author ID' })
  @ApiResponse({ status: 404, description: 'Author not found' })
  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    try {
      const updatedAuthor = await this.authorRepository.update(
        id,
        updateAuthorDto,
      );
      if (!updatedAuthor.affected) {
        throw new NotFoundException('Author not found');
      }
      return updatedAuthor;
    } catch (error) {
      throw new Error('Error updating author');
    }
  }

  @ApiOperation({ summary: 'Soft delete an author by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Author ID' })
  @ApiResponse({ status: 404, description: 'Author not found' })
  async remove(id: number) {
    try {
      const deletedAuthor = await this.authorRepository.softDelete(id);
      if (!deletedAuthor.affected) {
        throw new NotFoundException('Author not found');
      }
      return deletedAuthor;
    } catch (error) {
      throw new Error('Error removing author');
    }
  }
}
