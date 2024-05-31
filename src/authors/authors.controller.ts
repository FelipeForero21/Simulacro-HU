import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@Controller('authors')
@ApiTags('Authors') // Etiqueta para la categoría de controlador
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post('/createAuthor')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Create a new author' })
  @ApiBody({ type: CreateAuthorDto })
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Get all authors' })
  findAll() {
    return this.authorsService.findAll();
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Update an author by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Author ID' })
  @ApiBody({ type: UpdateAuthorDto })
  update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(+id, updateAuthorDto);
  }

  @Delete('/softDelete/:id')
  @ApiOperation({ summary: 'Soft delete an author by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Author ID' })
  remove(@Param('id') id: string) {
    return this.authorsService.remove(+id);
  }
}
