import {
  IsEmail,
  IsInt,
  IsString,
  MaxLength,
  Min,
  MinLength,
  isEmail,
  isString,
} from 'class-validator';

export class PersonSchema {
  @IsString()
  @MaxLength(45)
  name: string;

  @IsInt()
  @Min(1)
  age: number;

  @IsString()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @MinLength(3)
  password: string;
}
