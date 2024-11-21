import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ReservassService } from './reservass.service';
import { CreateReservassDto } from './dto/create-reservass.dto';
import { UpdateReservassDto } from './dto/update-reservass.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller('reservass')
export class ReservassController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() CreateReservassDto: CreateReservassDto) {
    return this.client.send(
      {cmd:'create-licores'},
      CreateReservassDto);;
  }

  @Get()
  findAll() {
    return this.client.send(
      {cmd:'find-all'}, {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send(
      {cmd:'find-one'},{id}).pipe(
      catchError((error)=>{
      throw new RpcException(error);
      })
      );
  }

   @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateReservassDto: UpdateReservassDto) {
    return this.client.send(
      {cmd:'update-reservas'},{id,...UpdateReservassDto,},
      ).pipe(
      catchError((error)=>{
      throw new RpcException(error);
      }),
      );;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send(
      {cmd:'remove-reserva'},{id},).pipe(
      catchError((error)=> {
      throw new RpcException(error);
      }),
      );;
  }
}
