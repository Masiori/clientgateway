import { PartialType } from '@nestjs/swagger';
import { CreateReservassDto } from './create-reservass.dto';

export class UpdateReservassDto extends PartialType(CreateReservassDto) {}
