import mongoose, { Mongoose } from 'mongoose';

class MongoDBMock {
  private database: Mongoose;

  async connect(): Promise<void> {
    if (!process.env.MONGO_URL) {
      throw new Error('MongoDB server not initialized');
    }

    this.database = await mongoose.connect(process.env.MONGO_URL);
  }

  disconnect(): Promise<void> {
    return this.database.connection.close();
  }
}

export default new MongoDBMock();
