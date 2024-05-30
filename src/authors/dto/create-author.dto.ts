import {
    IsString
  } from 'class-validator';
  
  export class CreateAuthorDto{

    @IsString()
    author: string;
  }
  
  
  
  