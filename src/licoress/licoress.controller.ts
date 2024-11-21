import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { LicoressService } from './licoress.service';
import { CreateLicoressDto } from './dto/create-licoress.dto';
import { UpdateLicoressDto } from './dto/update-licoress.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

@Controller('licoress')
export class LicoressController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createLicoressDto: CreateLicoressDto) {
    return this.client.send(
      {cmd:'create-licores'},
      createLicoressDto);;
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
  update(@Param('id') id: string, @Body() updateLicoressDto: UpdateLicoressDto) {
    return this.client.send(
      {cmd:'update-licores'},{id,...updateLicoressDto,},
      ).pipe(
      catchError((error)=>{
      throw new RpcException(error);
      }),
      );;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send(
      {cmd:'remove-licores'},{id},).pipe(
      catchError((error)=> {
      throw new RpcException(error);
      }),
      );;
  }
}
