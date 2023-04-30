import { eventRepository } from './event-repository';
import { HttpError } from '../models/httpError';
const getAllEvents = async (reqQuery) => {
    let events;
    try {
        events = await eventRepository.getAllEvents(reqQuery);
    }
    catch (err) {
        throw new HttpError('Fetching events faild. Please, try again later.', 500);
    }
    return events;
};
const getUserEvents = async (userId) => {
    let events;
    try {
        events = await eventRepository.getUserEvents(userId);
    }
    catch (err) {
        throw new HttpError('Fetching user events faild. Please, try again later', 500);
    }
    return events;
};
const addEvent = async (reqBody, user) => {
    let createdEvent;
    try {
        createdEvent = await eventRepository.addEvent(reqBody, user);
    }
    catch (err) {
        throw new HttpError('Adding new event faild. Please, try again later.', 500);
    }
    return createdEvent;
};
const getEventById = async (reqParams) => {
    let event;
    try {
        event = eventRepository.getEventById(reqParams);
    }
    catch (err) {
        throw new HttpError('Fetching event faild. Please, try again later.', 500);
    }
    return event;
};
const deleteEventById = async (reqParams) => {
    let event;
    try {
        event = eventRepository.deleteEventById(reqParams);
    }
    catch (err) {
        throw new HttpError('Deleting event faild. Please, try again later.', 500);
    }
};
const updateEventById = async (reqParams, reqBody) => {
    let event;
    try {
        event = await eventRepository.updateEventById(reqParams, reqBody);
        return event;
    }
    catch (err) {
        throw new HttpError('Updating event faild. Please, try again later.', 500);
    }
};
export const eventService = {
    getAllEvents,
    getUserEvents,
    addEvent,
    getEventById,
    deleteEventById,
    updateEventById
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V2ZW50L2V2ZW50LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRCxNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7SUFDcEMsSUFBSSxNQUFNLENBQUE7SUFDVixJQUFJO1FBQ0EsTUFBTSxHQUFHLE1BQU0sZUFBZSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN4RDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpREFBaUQsRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUM5RTtJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2pCLENBQUMsQ0FBQTtBQUVELE1BQU0sYUFBYSxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNuQyxJQUFJLE1BQU0sQ0FBQTtJQUNWLElBQUk7UUFDQSxNQUFNLEdBQUcsTUFBTSxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQ3ZEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixNQUFNLElBQUksU0FBUyxDQUFDLHFEQUFxRCxFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQ2xGO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNyQyxJQUFJLFlBQVksQ0FBQTtJQUNoQixJQUFJO1FBQ0EsWUFBWSxHQUFHLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7S0FDL0Q7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMsa0RBQWtELEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDL0U7SUFDRCxPQUFPLFlBQVksQ0FBQTtBQUN2QixDQUFDLENBQUE7QUFFRCxNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDckMsSUFBSSxLQUFLLENBQUE7SUFDVCxJQUFJO1FBQ0EsS0FBSyxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7S0FDbEQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDN0U7SUFDRCxPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRCxNQUFNLGVBQWUsR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUU7SUFDeEMsSUFBSSxLQUFLLENBQUE7SUFDVCxJQUFJO1FBQ0EsS0FBSyxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7S0FDckQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDN0U7QUFDTCxDQUFDLENBQUE7QUFFRCxNQUFNLGVBQWUsR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ2pELElBQUksS0FBSyxDQUFBO0lBQ1QsSUFBSTtRQUNBLEtBQUssR0FBRyxNQUFNLGVBQWUsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2pFLE9BQU8sS0FBSyxDQUFBO0tBQ2Y7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDN0U7QUFDTCxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUc7SUFDeEIsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0NBQ2xCLENBQUMifQ==