import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>
  ) {}


  async create(createAuthorDto: CreateAuthorDto) {
    try {
      const newAuthor = await this.authorRepository.save(createAuthorDto);
      return newAuthor;
    } catch (error) {
      throw new Error('Error creating author');
    }
  }



  async findAll(): Promise<Author[]> {
    try {
      const authors = await this.authorRepository.find();
      return authors;
    } catch (error) {
      throw new Error('Error finding authors');
    }
  }
  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    try {
      const updatedAuthor = await this.authorRepository.update(id, updateAuthorDto);
      if (!updatedAuthor.affected) {
        throw new NotFoundException('Author not found');
      }
      return updatedAuthor;
    } catch (error) {
      throw new Error('Error updating author');
    }
  }

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


