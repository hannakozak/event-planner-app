import jwt from 'jsonwebtoken';
import { HttpError } from '../models/httpError';
import { NextFunction, Response, Request } from 'express';
import { UserType } from '../user/user-model';
import { RequestWithUser } from '../user/user-types';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.nToken;

  if (
    typeof req.cookies.nToken === 'undefined' ||
    req.cookies.nToken === null
  ) {
    const error = new HttpError('No token provided', 401);
    return next(error);
  }

  const decodedToken = jwt.decode(token, { complete: true });
  const userRequest = req as RequestWithUser;
  if (decodedToken) {
    userRequest.user = decodedToken.payload as UserType;
  }

  next();
};
