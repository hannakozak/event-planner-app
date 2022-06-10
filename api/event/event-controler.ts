import { Request, Response, NextFunction, RequestHandler } from 'express';
import { eventService } from "./event-service";
import { AddEventRequest, DeleteEventRequest, EventType, GetEventRequest, UpdateEventRequest } from './event-type';


const getAllEvents: RequestHandler = async function (req: Request, res: Response, next: NextFunction) {
    let events: EventType[]
    try {
        let reqQuery = req.query
        events = await eventService.getAllEvents(reqQuery);

        if (events.length === 0) {
            return res.status(204).json({
                message: "No events found",
            });
        }

        return res.status(200).json({
            data: events,
        });

    } catch (err) {
        return next(err)
    }
};

const addEvent: RequestHandler = async (req: AddEventRequest, res: Response, next: NextFunction) => {
    const { title, description, date, time } = req.body

    let createdEvent: EventType;
    try {
        createdEvent = await eventService.addEvent(title, description, date, time)
    } catch (err) {
        return next(err)
    }

    res.status(201)
    res.json({ data: createdEvent })
}

const getEventById = async (req: GetEventRequest, res: Response, next: NextFunction) => {
    let event: EventType
    try {
        event = await eventService.getEventById(req.params)
        return res.status(200).json({
            data: event,
        });
    } catch (err) {
        return next(err)
    }
}

const deleteEventById = async (req: DeleteEventRequest, res: Response, next: NextFunction) => {
    try {
        const event = await eventService.deleteEventById(req.params)
        return res.status(200).json({
            data: {},
        });
    } catch (err) {
        return next(err)
    }
}

const updateEventById = async (req: UpdateEventRequest, res: Response, next: NextFunction) => {
    try {
        const event = await eventService.updateEventById(req.params, req.body)
        return res.status(200).json({
            data: event
        })
    } catch (err) {
        return next(err)
    }
}

export const eventControler = {
    getAllEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById
};