import { Module } from '@nestjs/common';
import { PermisionsController } from './permisions.controller';
import { PermisionsService } from './permisions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Permision, permisionSchema } from './schemas/permision.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Permision.name,
        schema: permisionSchema,
      },
    ]),
  ],
  controllers: [PermisionsController],
  providers: [PermisionsService],
})
export class PermisionsModule {}
