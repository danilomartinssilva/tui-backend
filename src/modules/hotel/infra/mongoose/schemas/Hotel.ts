import mongoose, { Document, Model, Schema } from 'mongoose';

export type HotelAttributes = {
  chainCode: string;
  iataCode: string;
  name: string;
};

export type HotelDocument = Document & HotelAttributes;

type HotelModel = Model<HotelDocument>;

const HotelSchema = new Schema(
  {
    chainCode: { type: String, required: true },
    iataCode: { type: String, required: true },
    name: { type: String, required: true },

    offers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Offer',
      },
    ],
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
