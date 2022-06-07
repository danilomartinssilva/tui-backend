import mongoose, { Document, Model, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
,


export type HotelAttributes = {
  _id: string;
  chainCode: string;
  iataCode: string;
  name: string;
  available: boolean;
};

export type HotelDocument = Document & HotelAttributes;

type HotelModel = Model<HotelDocument>;

const HotelSchema = new Schema(
  {
    _id: { type: String, required: true, default: uuid },
    chainCode: { type: String, required: true },
    iataCode: { type: String, required: true },
    name: { type: String, required: true },
    available: { type: String, required: true },
  },
  {
    collection: 'hotel',
    strict: true,
    timestamps: true,
  },
);

const HotelMongoose = mongoose.model<HotelDocument, HotelModel>(
  'Hotel',
  HotelSchema,
);

export default HotelMongoose;
