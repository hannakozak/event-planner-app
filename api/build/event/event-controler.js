import { eventService } from './event-service';
import { userService } from '../user/user-service';
const getAllEvents = async (req, res, next) => {
    let events;
    try {
        events = await eventService.getAllEvents();
        if (events.length === 0) {
            return res.status(204).json({
                message: 'No events found',
            });
        }
        return res.status(200).json({
            data: events,
        });
    }
    catch (err) {
        return next(err);
    }
};
const getUserEvents = async (req, res, next) => {
    const userRequest = req;
    const userId = userRequest.user._id;
    let events;
    try {
        events = await eventService.getUserEvents(userId);
        if (events.length === 0) {
            return res.status(204).json({
                message: 'No events found',
            });
        }
        return res.status(200).json({
            data: events,
        });
    }
    catch (err) {
        return next(err);
    }
};
const addEvent = async (req, res, next) => {
    const userRequest = req;
    const userId = userRequest.user._id;
    let loginUser;
    try {
        loginUser = (await userService.authUser(userId));
    }
    catch (err) {
        return next(err);
    }
    if (!loginUser) {
        return res.status(401).json({ error: 'token missing or invalid' });
    }
    let createdEvent;
    try {
        createdEvent = await eventService.addEvent(req.body, loginUser);
    }
    catch (err) {
        return next(err);
    }
    res.status(201);
    res.json({ data: createdEvent });
};
const getEventById = async (reqParams, req, res, next) => {
    let event;
    try {
        event = await eventService.getEventById(reqParams);
        return res.status(200).json({
            data: event,
        });
    }
    catch (err) {
        return next(err);
    }
};
const deleteEventById = async (reqParams, req, res, next) => {
    try {
        const event = await eventService.deleteEventById(reqParams);
        return res.status(200).json({
            data: {},
        });
    }
    catch (err) {
        return next(err);
    }
};
const updateEventById = async (reqParams, req, res, next) => {
    try {
        const event = await eventService.updateEventById(reqParams, req.body);
        return res.status(200).json({
            data: event,
        });
    }
    catch (err) {
        return next(err);
    }
};
export const eventControler = {
    getAllEvents,
    getUserEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById,
};
