import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  HttpException,
  HttpStatus,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { SellsService } from './sells.service';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { ApiOperation, ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';
import { Sell } from './entities/sell.entity';

@Controller('sells')
@ApiTags('Sells')
export class SellsController {
  constructor(private readonly sellsService: SellsService) {}

  @ApiOperation({ summary: 'Create a new sell' })
  @ApiBody({ type: CreateSellDto })
  @Post('/newSell')
  create(@Body() createSellDto: CreateSellDto) {
    try {
      return this.sellsService.create(createSellDto);
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw new HttpException(
          'Orders cannot be processed between 6pm and 6am',
          HttpStatus.FORBIDDEN,
        );
      }
      throw error;
    }
  }

  @ApiOperation({ summary: 'Get all sells' })
  @Get('/all')
  findAll() {
    return this.sellsService.findAll();
  }

  @ApiOperation({ summary: 'Soft delete sell by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Sell ID' })
  @Delete('/softDelete/:id')
  remove(@Param('id') id: string) {
    return this.sellsService.remove(+id);
  }

}
