import { Schema, model } from 'mongoose';

interface Event {
    _id: Schema.Types.ObjectId;
    title: string;
    description: string;
    date: string;
    time: string
}

const eventSchema = new Schema<Event>({
    _id: Schema.Types.ObjectId,
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"], },
    date: { type: String, required: [true, "Date is required"], },
    time: { type: String, required: [true, "Time is required"], },
});

export const Event = model<Event>('Event', eventSchema);