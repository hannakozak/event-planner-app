import { Event } from './event-model';
const getAllEvents = async () => {
    const events = await Event.find().lean();
    return events;
};
const getUserEvents = async (userId) => {
    const query = Event.find({ user: userId });
    const documents = await query;
    const events = documents.map((doc) => doc.toObject());
    return events;
};
const addEvent = async (reqBody, loginUser) => {
    const createdEvent = new Event({
        ...reqBody,
        user: loginUser._id,
    });
    await createdEvent.save();
    const eventId = createdEvent._id;
    loginUser.events = loginUser.events.concat([eventId]);
    await loginUser.save();
    return createdEvent;
};
const getEventById = async (reqParams) => {
    const event = await Event.findById({ _id: reqParams.id });
    return event;
};
const deleteEventById = async (reqParams) => {
    const event = await Event.findById({ _id: reqParams.id });
    if (event) {
        return await event.remove();
    }
};
const updateEventById = async (reqParams, reqBody) => {
    const eventToUpdate = {
        ...reqBody,
    };
    const event = await Event.findByIdAndUpdate(reqParams.id, eventToUpdate);
    if (event) {
        event.save();
    }
    return event;
};
export const eventRepository = {
    getAllEvents,
    getUserEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById,
};
