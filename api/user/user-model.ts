import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
    image: string
}

const userSchema = new Schema<IUser>({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    image: { type: String },
});

export const User = model<IUser>('User', userSchema);