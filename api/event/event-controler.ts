import { Request, Response, NextFunction, RequestHandler } from 'express';
import { eventService } from "./event-service";
import { EventType } from './event-type';
import { userService } from '../user/user-service';

const getAllEvents = async function (req, res: Response, next: NextFunction) {
    let events: EventType[]
    try {
        events = await eventService.getAllEvents(req.query);

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

const getUserEvents = async (req, res, next) => {
    const userId = req.user.userId;
    let events
    try {
        events = await eventService.getUserEvents(userId);

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
}

const addEvent = async (req: any, res, next) => {
    const userId = req.user.userId;
    let loginUser;
    try {
        loginUser = await userService.authUser(userId)
    } catch (err) {
        return next(err)
    }

    if (!loginUser) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    let createdEvent: EventType;
    try {
        createdEvent = await eventService.addEvent(req.body, loginUser)
    } catch (err) {
        return next(err)
    }

    res.status(201)
    res.json({ data: createdEvent })
}

const getEventById = async (req: Request, res: Response, next: NextFunction) => {
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

const deleteEventById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const event = await eventService.deleteEventById(req.params)
        return res.status(200).json({
            data: {},
        });
    } catch (err) {
        return next(err)
    }
}

const updateEventById = async (req: Request, res: Response, next: NextFunction) => {
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
    getUserEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById
};