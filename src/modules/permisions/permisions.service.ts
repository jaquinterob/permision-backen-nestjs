import { ConflictException, Injectable } from '@nestjs/common';
import { Permision } from './schemas/permision.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PermisionDto } from './dto/permision-dto';

@Injectable()
export class PermisionsService {
  constructor(
    @InjectModel(Permision.name) private permisionModel: Model<Permision>,
  ) {}

  async createPermision(permision: PermisionDto) {
    const permisionExists = await this.permisionModel.findOne({
      name: permision.name,
    });
    if (permisionExists) {
      throw new ConflictException('el permiso ya existe');
    }
    const newPermision = new this.permisionModel(permision);
    return newPermision.save();
  }

  getAllPermisions(){
    return this.permisionModel.find()
  }
}
