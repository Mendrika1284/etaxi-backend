import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Role {
  client = 'CLIENT',
  driver = 'CONDUCTEUR',
  admin = 'ADMIN',
}

@Schema({ collection: 'Users' })
export class Users {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: Role;

  @Prop()
  phone: string;

  @Prop()
  profilePicture: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
