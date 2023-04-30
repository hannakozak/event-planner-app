import Joi, { Schema } from 'joi';
import { HttpError } from '../models/httpError';
import { Request, NextFunction, Response } from 'express';

export const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { value, error } = Joi.compile(schema).validate(req.body);

    if (error) {
      const errorMessage = error.details
        .map((details) => details.message)
        .join(', ');

      throw new HttpError(errorMessage, 400);
    }

    Object.assign(req, value);
    return next();
  };
