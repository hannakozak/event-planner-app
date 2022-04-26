import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    avatar?: string;
    events?: string
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minLength: 6 },
    repeatPassword: { type: String, required: true },
});

export const User = model<IUser>('User', userSchema);