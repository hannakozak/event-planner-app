import { Schema, model } from 'mongoose';

interface Event {
    title: string;
    description: string;
    start: Date;
    end: Date;
    user: Schema.Types.ObjectId
}

const eventSchema = new Schema<Event>({
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"], },
    start: { type: Date, required: [true, "Date is required"], },
    end: { type: Date, required: [true, "Time is required"], },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }

});

export const Event = model<Event>('Event', eventSchema);