import express from "express";
import { checkAuth } from "../middleware/checkAuth";
import { eventControler } from "./event-controler";
export const eventRoutes = express.Router();
eventRoutes.get('/', checkAuth, eventControler.getAllEvents);
eventRoutes.get('/userEvents', checkAuth, eventControler.getUserEvents);
eventRoutes.post('/', checkAuth, eventControler.addEvent);
eventRoutes.get('/:id', eventControler.getEventById);
eventRoutes.delete('/:id', eventControler.deleteEventById);
eventRoutes.put('/:id', eventControler.updateEventById);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZXZlbnQvZXZlbnQtcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUU1RCxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBRXZFLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7QUFFekQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBRXBELFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtBQUUxRCxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUEifQ==