import { Event } from './event-model'
import { User } from '../user/user-model';

const getAllEvents = async (reqQuery) => {
    const queryObject = { ...reqQuery };
    const query = Event.find(queryObject)
    const events = await query
    return events
}

const getUserEvents = async (userId) => {
    const query = Event.find({ user: userId })
    const events = await query
    return events
}


const addEvent = async (reqBody, loginUser) => {
    const createdEvent = new Event({
        ...reqBody, user: loginUser._id
    })
    await createdEvent.save()

    loginUser.events = loginUser.events.concat(createdEvent._id)
    await loginUser.save()

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
        start: reqBody.start,
        end: reqBody.end
    }
    const event = await Event.findByIdAndUpdate(reqParams.id, eventToUpdate)
    event.save();
    return event
}

export const eventRepository = {
    getAllEvents,
    getUserEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById
};

