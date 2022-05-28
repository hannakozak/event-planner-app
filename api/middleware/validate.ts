import Joi from 'joi'
import { HttpError } from '../models/httpError'

export const validate = (schema) => (req, res, next) => {
    const { value, error } = Joi.compile(schema).validate(req.body)

    if (error) {
        const errorMessage = error.details
            .map((details) => details.message)
            .join(', ')

        throw new HttpError(errorMessage, 400)
    }

    Object.assign(req, value)
    return next()
}