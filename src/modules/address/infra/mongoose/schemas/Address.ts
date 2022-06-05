import mongoose, { Document, Model, Schema } from 'mongoose';

export type AddressAttributes = {
  _id: string;
  cityName: string;
  cityCode: string;
  regionCode: string;
};

export type AddressDocument = Document & AddressAttributes;

type AddressModel = Model<AddressDocument>;

const AddressSchema = new Schema(
  {
    _id: { type: String, required: true },
    cityName: { type: String, required: true },
    cityCode: { type: String, required: true },
    regionCode: { type: String, required: true },
  },
  {
    collection: 'address',
    strict: true,
    timestamps: true,
    versionKey: true,
  },
);

const AddressMongoose = mongoose.connection
  .useDb(process.env.MONGOOSE_DATABASE)
  .model<AddressDocument, AddressModel>('Address', AddressSchema);
