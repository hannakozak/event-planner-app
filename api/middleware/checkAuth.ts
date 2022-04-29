import jwt from "jsonwebtoken";
import { HttpError } from "../models/httpError";

export const checkAuth = (req, res, next) => {
    let token = req.cookies.nToken

    if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
        const error = new HttpError('No token provided', 401)
        return next(error)
    }

    const decodedToken = jwt.decode(token, { complete: true });
    req.user = decodedToken.payload;
    next();
};
