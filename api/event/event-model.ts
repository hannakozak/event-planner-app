import { Schema, model } from 'mongoose';

interface Event {
    title: string;
    description: string;
    date: string;
    time: string;
    user: Schema.Types.ObjectId
}

const eventSchema = new Schema<Event>({
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"], },
    date: { type: String, required: [true, "Date is required"], },
    time: { type: String, required: [true, "Time is required"], },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }

});

export const Event = model<Event>('Event', eventSchema);