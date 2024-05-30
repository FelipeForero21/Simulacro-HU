import {
    IsString,
  } from 'class-validator';
  
  export class CreateBookDto {
    @IsString()
    author: string;

    @IsString()
    nameOfBook: string;


  }
  
  
  
  