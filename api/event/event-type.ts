import { Request } from 'express';
import { Schema } from 'mongoose';

export type EventType = {
    _id: Schema.Types.ObjectId,
    title: string,
    description: string,
    date: string,
    time: string
}


export interface GetEventRequest extends Request<{ _id: EventType['_id'] }> { }
export interface AddEventRequest extends Request { }
export interface UpdateEventRequest extends Request<{ id: EventType['_id'] }, any, EventType> { }
export interface DeleteEventRequest extends Request<{ id: EventType['_id'] }> { }