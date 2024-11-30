import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({ collection: 'Payments' })
export class Payment {
  @Prop({ required: true })
  rideId: string;

  @Prop({ required: true })
  clientId: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, enum: ['card', 'paypal'] })
  paymentMethod: string;

  @Prop({ required: true, enum: ['success', 'failed'] })
  status: string;

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
