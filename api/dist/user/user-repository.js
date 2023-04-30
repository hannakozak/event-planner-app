import { User } from './user-model';
import bcrypt from 'bcryptjs';
const getAllUsers = async () => {
    const users = await User.find({}, '-password');
    return users;
};
const findUserByEmail = async (email) => {
    const existingUser = (await User.findOne({ email }));
    if (!existingUser) {
        return;
    }
    return existingUser;
};
const findUserById = async (userId) => {
    const authUser = await User.findOne({ _id: userId }).select('-password');
    return authUser;
};
const register = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
    });
    await createdUser.save();
    return createdUser._id;
};
export const userRepository = {
    getAllUsers,
    findUserByEmail,
    findUserById,
    register,
};
