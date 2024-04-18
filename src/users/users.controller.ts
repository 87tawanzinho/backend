import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PersonSchema } from 'src/schemaValidation/person.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly serviceUser: UsersService) {}

  @Get()
  async getAll() {
    return this.serviceUser.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return this.serviceUser.getOne(id);
  }

  @Post()
  async create(@Body(ValidationPipe) body: PersonSchema) {
    return this.serviceUser.create(body);
  }
}
