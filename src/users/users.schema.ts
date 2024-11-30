import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Role {
  client = 'CLIENT',
  driver = 'CONDUCTEUR',
  admin = 'ADMIN',
}

export type UserDocument = Users & Document;

@Schema({ collection: 'Users' })
export class Users {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ enum: Role })
  role: Role;

  @Prop()
  phone: string;

  @Prop()
  profilePicture: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
