import { Request, Response, NextFunction } from 'express';
import { UserType } from './user-types';
import { userService } from './user-service';
import { userValidation } from './user-validation';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    let users: UserType[];
    try {
        users = await userService.getAllUsers()
    } catch (err) {
        return next(err)
    }
    res.status(200)
    res.json({ users })
}

const register = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body
    const image = req.file.path

    const { error } = userValidation.register(req.body);

    let createdUserId;
    try {
        createdUserId = await userService.register(name, email, password, image)
    } catch (err) {
        return next(err)
    }

    res.status(201)
    res.json({ userId: createdUserId })
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    const { error } = userValidation.login(req.body);
    const errorObject = {}
    if (error) {
        for (const item of error.details) {
            errorObject[item.path[0]] = item.message;
        }
        return res.status(400).json({ message: errorObject });
    }

    let token: string
    try {
        token = await userService.login(email, password)
    } catch (err) {
        return next(err)
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

const authUser = async (req, res: Response, next: NextFunction) => {
    const userId = req.user.userId;
    let loginUser;
    try {
        loginUser = await userService.authUser(userId)
    } catch (err) {
        return next(err)
    }
    res.status(200)
    res.json({ message: loginUser })
}

export const userControler = {
    getAllUsers,
    authUser,
    register,
    login,
    logout
};