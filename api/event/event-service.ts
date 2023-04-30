import { eventRepository } from './event-repository';
import { HttpError } from '../models/httpError';
import { UserType } from '../user/user-model';
import { EventInterface } from './event-model';
import { ObjectId, Schema } from 'mongoose';

const getAllEvents = async () => {
  let events;
  try {
    events = await eventRepository.getAllEvents();
  } catch (err) {
    throw new HttpError('Fetching events faild. Please, try again later.', 500);
  }
  return events;
};

const getUserEvents = async (userId: Schema.Types.ObjectId) => {
  let events;
  try {
    events = await eventRepository.getUserEvents(userId);
  } catch (err) {
    throw new HttpError(
      'Fetching user events faild. Please, try again later',
      500,
    );
  }
  return events;
};

const addEvent = async (reqBody: EventInterface, user: UserType) => {
  let createdEvent;
  try {
    createdEvent = await eventRepository.addEvent(reqBody, user);
  } catch (err) {
    throw new HttpError(
      'Adding new event faild. Please, try again later.',
      500,
    );
  }
  return createdEvent;
};

const getEventById = async (reqParams: { id: ObjectId }) => {
  let event;
  try {
    event = eventRepository.getEventById(reqParams);
  } catch (err) {
    throw new HttpError('Fetching event faild. Please, try again later.', 500);
  }
  return event;
};

const deleteEventById = async (reqParams: { id: Schema.Types.ObjectId }) => {
  let event;
  try {
    event = eventRepository.deleteEventById(reqParams);
  } catch (err) {
    throw new HttpError('Deleting event faild. Please, try again later.', 500);
  }
};

const updateEventById = async (
  reqParams: { id: Schema.Types.ObjectId },
  reqBody: EventInterface,
) => {
  let event;
  try {
    event = await eventRepository.updateEventById(reqParams, reqBody);
    return event;
  } catch (err) {
    throw new HttpError('Updating event faild. Please, try again later.', 500);
  }
};

export const eventService = {
  getAllEvents,
  getUserEvents,
  addEvent,
  getEventById,
  deleteEventById,
  updateEventById,
};
