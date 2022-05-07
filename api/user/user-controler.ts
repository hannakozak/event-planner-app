import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../models/httpError';
import { UserType } from './user-types';
import { userService } from './user-service';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    let users: UserType[];
    try {
        users = await userService.getAllUsers()
    } catch (err) {
        const error = new HttpError('Fetching users faild, please try again later.', 500)
        return next(error)
    }
    res.status(200)
    res.json({ users: users })
}

const register = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body

    let createdUserId;
    try {
        createdUserId = await userService.register(name, email, password)
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again later', 500)
        return next(error)
    }

    res.status(201)
    res.json({ userId: createdUserId })
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    let token: string
    try {
        token = await userService.login(email, password)
    } catch (err) {
        const error = new HttpError('Loggin in failed. Please try again later', 500)
        return next(error)
    }

    res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
    res.status(200)
    res.json({ message: 'Log in' })
}

const logout = (req: Request, res: Response) => {
    res.clearCookie('nToken');
    res.status(200)
    res.json({ message: 'Log out' })
}

const authUser = async (req, res, next) => {
    const userId = req.user.userId;
    let authUser;
    try {
        authUser = await userService.authUser(userId)
    } catch (err) {
        const error = new HttpError('Could not find user', 404)
        return next(error)
    }
    res.status(200)
    res.json({ message: authUser })
}

export const userControler = {
    getAllUsers,
    authUser,
    register,
    login,
    logout
};