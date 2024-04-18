import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from 'src/models/person.model';
import { PersonSchema } from 'src/schemaValidation/person.schema';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) {}

  async getAll() {
    return this.model.find();
  }

  async getOne(id: number): Promise<{ data: PersonModel }> {
    const person = await this.model.findOne({ where: { id } });
    if (!person) {
      throw new NotFoundException(`This id ${id} not exist in our database.`);
    }

    const returnedPerson = {
      ...person,
      password: 'undefined',
    };
    return { data: returnedPerson };
  }

  async create(body: PersonSchema) {
    const emailExist = await this.model.findOne({
      where: { email: body.email },
    });

    if (emailExist) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    const personCreated = await this.model.save(body);

    const returnedPerson = {
      ...personCreated,
      password: 'undefined',
    };
    return { data: returnedPerson };
  }
}
