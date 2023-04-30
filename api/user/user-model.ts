import { Schema, Model, Document, model } from 'mongoose';

export type UserType = Document & {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  events: Schema.Types.ObjectId[];
};

const userSchema = new Schema<UserType>({
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

export const User: Model<UserType> = model<UserType>('User', userSchema);
