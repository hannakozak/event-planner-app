import express from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { eventControler } from './event-controler';

const eventRoutes = express.Router();

eventRoutes.get('/', checkAuth, eventControler.getAllEvents);

eventRoutes.get('/userEvents', checkAuth, eventControler.getUserEvents);

eventRoutes.post('/', checkAuth, eventControler.addEvent);

eventRoutes.get('/:id', eventControler.getEventById);

eventRoutes.delete('/:id', eventControler.deleteEventById);

eventRoutes.put('/:id', eventControler.updateEventById);

export default eventRoutes;
