import mongoose, { Document, Model, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
export type AddressAttributes = {
  _id: string;
  cityName: string;
  countryName: string;
  cityCode: string;
  regionCode: string;
};

export type AddressDocument = Document & AddressAttributes;

type AddressModel = Model<AddressDocument>;

const AddressSchema = new Schema(
  {
    _id: { type: String, required: true, default: uuid },
    cityName: { type: String, required: true },
    cityCode: { type: String, required: true },
    countryName: { type: String, required: true },
    regionCode: { type: String, required: true },
    hotels: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
      },
    ],
  },
  {
    collection: 'address',
    strict: true,
    timestamps: true,
  },
);

const AddressMongoose = mongoose.model<AddressDocument, AddressModel>(
  'Address',
  AddressSchema,
);

export default AddressMongoose;
