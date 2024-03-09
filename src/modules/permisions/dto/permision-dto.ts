import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, isString } from 'class-validator';

export class PermisionDto {
  @ApiProperty({
    name: 'name',
    type: String,
    description: 'Nombre del permiso',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  name!: string;
}
