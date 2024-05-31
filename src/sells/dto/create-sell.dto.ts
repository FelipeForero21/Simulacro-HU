import {
    IsString,
  } from 'class-validator';
  
  export class CreateSellDto {
    @IsString()
    author: string;

    @IsString()
    nameOfBook: string;


  }
  
  
  
  