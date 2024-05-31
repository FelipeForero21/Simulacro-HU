import { Injectable } from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { Sell } from './entities/sell.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual  } from 'typeorm';

@Injectable()
export class SellsService {
  constructor(
    @InjectRepository(Sell)
    private readonly sellRepository: Repository<Sell>
  ) {}

  create(createSellDto: CreateSellDto) {
    return 'This action adds a new sell';
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
