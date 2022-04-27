import { v4 as uuid } from 'uuid';
import { HttpError } from '../models/httpError';
import { User } from '../models/userModel';
import bcrypt from "bcryptjs/dist/bcrypt.js";

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, '-password')
    } catch (err) {
        const error = new HttpError('Fetching users faill, please try again later.', 500)
        return next(error)
    }
    res.json({ users: users.map(user => user.toObject({ getters: true })) })
}

const signup = async (req, res, next) => {
    const { name, email, password, repeatPassword } = req.body

    let existingUser
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
        password: hashedPassword,
        avatar: req.file.path,
    })

    try {
        await createdUser.save()
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again later', 500)
        return next(error)
    }

    res.status(201)
    res.json({ user: createdUser.toObject({ getters: true }) })
}

const login = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError('Signing up faild. Please, try again later.', 500)
        return next(error)
    }

    if (!existingUser) {
        const error = new HttpError('Invalid credentials. Could not log you in', 401)
        next(error)
    }

    let isValidPassword = await bcrypt.compare(password, existingUser.password)

    if (!isValidPassword) {
        const error = new HttpError('Invalid credentials. Could not log you in.', 401)
        next(error)
    }
    res.json({ message: 'Log in!', user: existingUser.toObject({ getters: true }) })
}

export const authController = {
    getUsers,
    signup,
    login,
};