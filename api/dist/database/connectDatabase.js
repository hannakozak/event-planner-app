import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connectDatabase = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.set('strictQuery', true);
        console.log('mongo database is connected');
    }
    catch (error) {
        console.error('mongo database connection error');
    }
};
