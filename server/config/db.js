import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {});
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
