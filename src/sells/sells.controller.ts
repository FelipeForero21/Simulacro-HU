import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellsService } from './sells.service';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { ApiOperation, ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('sells')
@ApiTags('Sells')
export class SellsController {
  constructor(private readonly sellsService: SellsService) {}

  @ApiOperation({ summary: 'Create a new sell' }) 
  @ApiBody({ type: CreateSellDto })
  @Post('/newSell')
  create(@Body() createSellDto: CreateSellDto) {
    return this.sellsService.create(createSellDto);
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
