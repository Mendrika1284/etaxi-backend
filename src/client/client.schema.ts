import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema({ collection: 'Clients' })
export class Client {
  @Prop({ required: true })
  userId: string;

  @Prop()
  address: string;

  @Prop()
  preferences: string[];

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
