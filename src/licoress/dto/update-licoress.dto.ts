import { PartialType } from '@nestjs/swagger';
import { CreateLicoressDto } from './create-licoress.dto';

export class UpdateLicoressDto extends PartialType(CreateLicoressDto) {}
