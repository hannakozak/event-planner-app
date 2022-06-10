import { eventRepository } from './event-repository';
import { HttpError } from '../models/httpError';

const getAllEvents = async (reqQuery) => {
    let events
    try {
        let query = await eventRepository.getAllEvents(reqQuery)
        events = await query
    } catch (err) {
        throw new HttpError('Fetching events faild. Please, try again later.', 500)
    }
    return events
}

const addEvent = async (title, description, date, time) => {
    let createdEvent
    try {
        createdEvent = await eventRepository.addEvent(title, description, date, time)
    } catch (err) {
        throw new HttpError('Adding new event faild. Please, try again later.', 500)
    }
    return createdEvent
}

const getEventById = async (reqParams) => {
    let event
    try {
        event = eventRepository.getEventById(reqParams)
    } catch (err) {
        throw new HttpError('Fetching event faild. Please, try again later.', 500)
    }
    return event
}

const deleteEventById = async (reqParams) => {
    let event
    try {
        event = eventRepository.deleteEventById(reqParams)
    } catch (err) {
        throw new HttpError('Deleting event faild. Please, try again later.', 500)
    }
}

const updateEventById = async (reqParams, reqBody) => {
    let event
    try {
        event = await eventRepository.updateEventById(reqParams, reqBody)
        return event
    } catch (err) {
        throw new HttpError('Updating event faild. Please, try again later.', 500)
    }
}

export const eventService = {
    getAllEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById
};
