import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event',
        },
    ],
});
export const User = model('User', userSchema);
