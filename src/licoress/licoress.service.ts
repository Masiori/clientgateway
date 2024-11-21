import { Injectable } from '@nestjs/common';
import { CreateLicoressDto } from './dto/create-licoress.dto';
import { UpdateLicoressDto } from './dto/update-licoress.dto';

@Injectable()
export class LicoressService {
  create(createLicoressDto: CreateLicoressDto) {
    return 'This action adds a new licoress';
  }

  findAll() {
    return `This action returns all licoress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licoress`;
  }

  update(id: number, updateLicoressDto: UpdateLicoressDto) {
    return `This action updates a #${id} licoress`;
  }

  remove(id: number) {
    return `This action removes a #${id} licoress`;
  }
}
