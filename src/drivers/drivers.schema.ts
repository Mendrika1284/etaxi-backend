import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DriverDocument = Driver & Document;

@Schema({ collection: 'Drivers' })
export class Driver {
  @Prop({ type: Types.ObjectId, ref: 'Users' })
  userId: Types.ObjectId;

  @Prop()
  vehicleType: string;

  @Prop()
  vehicleRegistration: string;

  @Prop({ default: true })
  isAvailable: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
