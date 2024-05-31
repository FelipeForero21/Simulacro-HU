import { Module } from '@nestjs/common';
import { SellsService } from './sells.service';
import { SellsController } from './sells.controller';
import { Sell } from './entities/sell.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sell])],
  controllers: [SellsController],
  providers: [SellsService],
})
export class SellsModule {}
