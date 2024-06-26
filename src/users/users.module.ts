import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
