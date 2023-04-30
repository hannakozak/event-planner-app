import { ObjectId } from 'mongoose-typescript';
import { User, UserType } from './user-model';
import bcrypt from 'bcryptjs';

const getAllUsers = async () => {
  const users: UserType[] = await User.find({}, '-password');
  return users;
};

const findUserByEmail = async (email: string) => {
  const existingUser: UserType = (await User.findOne({ email })) as UserType;
  if (!existingUser) {
    return;
  }
  return existingUser;
};

const findUserById = async (userId: ObjectId) => {
  const authUser = await User.findOne({ _id: userId }).select('-password');
  return authUser;
};

const register = async (name: string, email: string, password: string) => {
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
