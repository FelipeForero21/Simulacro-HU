import { Module } from '@nestjs/common';
import { SellsService } from './sells.service';
import { SellsController } from './sells.controller';
import { Sell } from './entities/sell.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/book.entity';

@Module({
  imports: [    TypeOrmModule.forFeature([Sell, Book])], 
  controllers: [SellsController],
  providers: [SellsService],
})
export class SellsModule {}
