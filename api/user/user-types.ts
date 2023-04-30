import { UserType } from './user-model';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: UserType;
}
