import express from "express";
import { eventControler } from "./event-controler";

export const eventRoutes = express.Router();

eventRoutes.get('/', eventControler.getAllEvents)

eventRoutes.post('/', eventControler.addEvent)

eventRoutes.get('/:id', eventControler.getEventById)

eventRoutes.delete('/:id', eventControler.deleteEventById)

eventRoutes.put('/:id', eventControler.updateEventById)