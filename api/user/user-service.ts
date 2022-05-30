import { userRepository } from './user-repository';
import { UserType } from './user-types';
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";
import { HttpError } from '../models/httpError';

const getAllUsers = async () => {
    let users: UserType[]
    try {
        users = await userRepository.getAllUsers()
    } catch (err) {
        throw new HttpError('Fetching users faild. Please, try again later.', 500)
    }

    return users
}

const register = async (name: string, email: string, password: string) => {
    let existingUser: UserType
    try {
        existingUser = await userRepository.findUserByEmail(email)
    } catch (err) {
        throw new HttpError('Signing up faild. Please, try again later.', 500)
    }

    if (existingUser) {
        throw new HttpError('Email already exists, please log in instead.', 422)
    }

    let createdUserId
    try {
        createdUserId = await userRepository.register(name, email, password)
    } catch (err) {
        throw new HttpError('Signing up faild. Please, try again later.', 500)
    }

    return createdUserId
}

const login = async (email: string, password: string) => {
    let existingUser: UserType
    try {
        existingUser = await userRepository.findUserByEmail(email)
    } catch (err) {
        throw new HttpError('Signing up faild. Please, try again later', 500)
    }

    if (!existingUser) {
        throw new HttpError('Invalid credentials. Could not log you in', 401)
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password)

    if (!isValidPassword) {
        throw new HttpError('Invalid credentials. Could not log you in', 401)
    }

    let token: string
    try {
        token = jwt.sign({ userId: existingUser._id, email: existingUser.email }, process.env.TOKEN_SECRET, { expiresIn: '8h' })
    } catch (err) {
        throw new HttpError('Loggin in failed. Please try again later', 500)

    }
    return token
}

const authUser = async (userId) => {
    let loginUser;
    try {
        loginUser = await userRepository.findUserById(userId)
    } catch (err) {
        throw new HttpError('Could not find user', 404)
    }
    return authUser
}

export const userService = {
    getAllUsers,
    register,
    login,
    authUser
};

