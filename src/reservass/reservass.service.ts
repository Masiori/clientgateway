import { Injectable } from '@nestjs/common';
import { CreateReservassDto } from './dto/create-reservass.dto';
import { UpdateReservassDto } from './dto/update-reservass.dto';

@Injectable()
export class ReservassService {
  create(createReservassDto: CreateReservassDto) {
    return 'This action adds a new reservass';
  }

  findAll() {
    return `This action returns all reservass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservass`;
  }

  update(id: number, updateReservassDto: UpdateReservassDto) {
    return `This action updates a #${id} reservass`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservass`;
  }
}
