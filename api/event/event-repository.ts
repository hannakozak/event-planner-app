import { Schema } from 'mongoose';
import { UserType } from '../user/user-model';
import { Event, EventInterface } from './event-model';

const getAllEvents = async () => {
  const events = await Event.find().lean<EventInterface>();
  return events;
};

const getUserEvents = async (userId: Schema.Types.ObjectId) => {
  const query = Event.find({ user: userId });
  const documents = await query;
  const events = documents.map((doc) => doc.toObject() as EventInterface);
  return events;
};

const addEvent = async (reqBody: EventInterface, loginUser: UserType) => {
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

const getEventById = async (reqParams: { id: Schema.Types.ObjectId }) => {
  const event = await Event.findById({ _id: reqParams.id });
  return event;
};

const deleteEventById = async (reqParams: { id: Schema.Types.ObjectId }) => {
  const event = await Event.findById({ _id: reqParams.id });
  if (event) {
    return await event.remove();
  }
};

const updateEventById = async (
  reqParams: { id: Schema.Types.ObjectId },
  reqBody: EventInterface,
) => {
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
