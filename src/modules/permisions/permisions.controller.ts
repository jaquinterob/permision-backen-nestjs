import { Body, Controller, Get, Post } from '@nestjs/common';
import { PermisionsService } from './permisions.service';
import { ApiTags } from '@nestjs/swagger';
import { PermisionDto } from './dto/permision-dto';

@Controller('/api/v1/permisions')
@ApiTags('permisions')
export class PermisionsController {
  constructor(private readonly permisionService: PermisionsService) {}

  @Post()
  createPermision(@Body() permision: PermisionDto) {
    return this.permisionService.createPermision(permision)
  }

  @Get()
  getAllPermisions(){
    return this.permisionService.getAllPermisions()
  }
}
