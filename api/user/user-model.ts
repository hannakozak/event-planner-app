import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
    image: string
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"], },
    password: { type: String, required: [true, "Password is required"], },
    image: { type: String },
});

export const User = model<IUser>('User', userSchema);