import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post("/createAuthor")
  create(@Body() createAuthorDto: CreateAuthorDto) {    
    return this.authorsService.create(createAuthorDto);
  }

  @Get('/all')
  findAll() {
    return this.authorsService.findAll();
  }

  @Put('/update/:id')
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  @Delete('/softDelete/:id')
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
