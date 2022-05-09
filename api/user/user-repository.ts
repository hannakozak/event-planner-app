import { User } from './user-model'
import { UserType } from './user-types';
import bcrypt from "bcryptjs/dist/bcrypt.js";

const getAllUsers = async () => {
    const users: UserType[] = await User.find({}, '-password')
    return users
}

const findUserByEmail = async (email: string) => {
    const existingUser: UserType = await User.findOne({ email: email })
    if (!existingUser) {
        return
    }
    return existingUser
}

const findUserById = async (userId: number) => {
    const authUser = await User.findOne({ _id: userId }).select("-password")
    return authUser
}

const register = async (name: string, email: string, password: string) => {
    let hashedPassword = await bcrypt.hash(password, 12)

    const createdUser = new User({
        name,
        email,
        password: hashedPassword
    })

    await createdUser.save()
    return createdUser._id
}


export const userRepository = {
    getAllUsers,
    findUserByEmail,
    findUserById,
    register,
};

