import { Schema, model } from 'mongoose';
const eventSchema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    start: { type: Date, required: [true, 'Date is required'] },
    end: { type: Date, required: [true, 'Time is required'] },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
    },
});
export const Event = model('Event', eventSchema);
