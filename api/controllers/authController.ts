import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../models/httpError';
import { User } from '../models/userModel';
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";

type user = {
    _id: number,
    name: string,
    email: string,
    password: string
}

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    let users: user[];
    try {
        users = await User.find({}, '-password')
    } catch (err) {
        const error = new HttpError('Fetching users faill, please try again later.', 500)
        return next(error)
    }
    res.status(200)
    res.json({ users: users })
}

const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body

    let existingUser: user
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError('Signing up faild. Please, try again later.', 500)
        return next(error)
    }

    if (existingUser) {
        const error = new HttpError('Email already exists, please log in instead.', 422)
        return next(error)
    }

    let hashedPassword = await bcrypt.hash(password, 12)

    const createdUser = new User({
        name,
        email,
        password: hashedPassword
    })

    try {
        await createdUser.save()
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again later', 500)
        return next(error)
    }

    res.status(201)
    res.json({ userId: createdUser.id })
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    let existingUser: user
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError('Signing up faild. Please, try again later.', 500)
        return next(error)
    }

    if (!existingUser) {
        const error = new HttpError('Invalid credentials. Could not log you in', 401)
        return next(error)
    }

    let isValidPassword = await bcrypt.compare(password, existingUser.password)

    if (!isValidPassword) {
        const error = new HttpError('Invalid credentials. Could not log you in.', 401)
        return next(error)
    }


    let token: string
    try {
        token = jwt.sign({ userId: existingUser._id, email: existingUser.email }, process.env.TOKEN_SECRET, { expiresIn: '8h' })
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
        authUser = await User.findOne({ _id: userId }).select("-password")
    } catch (err) {
        const error = new HttpError('Could not find user', 404)
        return next(error)
    }
    res.status(200)
    res.json({ message: authUser })
}

export const authController = {
    getUsers,
    authUser,
    signup,
    login,
    logout
};