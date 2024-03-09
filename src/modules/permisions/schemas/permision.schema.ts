import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Permision {
  @Prop({ unique: true, uppercase: true, required: true, trim: true })
  name!: string;
}

export const permisionSchema = SchemaFactory.createForClass(Permision);
