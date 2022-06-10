import { Event } from './event-model'

const getAllEvents = async (reqQuery) => {
    const queryObject = { ...reqQuery };
    const events = await Event.find({ queryObject })
    return events
}

const addEvent = async (title, description, date, time) => {
    const createdEvent = new Event({
        title, description, date, time
    })
    await createdEvent.save()
    return createdEvent
}

const getEventById = async (reqParams) => {
    const event = await Event.findById({ _id: reqParams.id })
    return event
}

const deleteEventById = async (reqParams) => {
    const event = await Event.findById({ _id: reqParams.id })
    return await event.remove();
}

const updateEventById = async (reqParams, reqBody) => {
    const eventToUpdate = {
        title: reqBody.title,
        description: reqBody.description,
        date: reqBody.date,
        time: reqBody.time
    }
    const event = await Event.findByIdAndUpdate(reqParams.id, eventToUpdate)
    event.save();
    return eventToUpdate
}

export const eventRepository = {
    getAllEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById
};

