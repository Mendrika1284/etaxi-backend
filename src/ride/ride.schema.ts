import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RideDocument = HydratedDocument<Ride>;

@Schema({ collection: 'Rides' })
export class Ride {
  @Prop({ required: true })
  clientId: string;

  @Prop({ required: true })
  driverId: string;

  @Prop({ type: Object, required: true })
  pickupLocation: {
    latitude: number;
    longitude: number;
    address: string;
  };

  @Prop({ type: Object, required: true })
  dropoffLocation: {
    latitude: number;
    longitude: number;
    address: string;
  };

  @Prop({
    required: true,
    enum: ['pending', 'in_progress', 'completed', 'cancelled'],
  })
  status: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: new Date() })
  updatedAt: Date;
}

export const RideSchema = SchemaFactory.createForClass(Ride);
