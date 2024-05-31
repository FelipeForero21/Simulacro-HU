import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class CreateSellDto {
  @IsString()
  customer: string;

  @IsInt()
  bookId: number;
}

  
  
  