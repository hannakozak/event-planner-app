import { userRepository } from './user-repository';
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";
import { HttpError } from '../models/httpError';
const getAllUsers = async () => {
    let users;
    try {
        users = await userRepository.getAllUsers();
    }
    catch (err) {
        throw new HttpError('Fetching users faild. Please, try again later.', 500);
    }
    return users;
};
const register = async (name, email, password) => {
    let existingUser;
    try {
        existingUser = await userRepository.findUserByEmail(email);
    }
    catch (err) {
        throw new HttpError('Signing up faild. Please, try again later.', 500);
    }
    if (existingUser) {
        throw new HttpError('Email already exists, please log in instead.', 422);
    }
    let createdUserId;
    try {
        createdUserId = await userRepository.register(name, email, password);
    }
    catch (err) {
        throw new HttpError('Signing up faild. Please, try again later.', 500);
    }
    return createdUserId;
};
const login = async (email, password) => {
    let existingUser;
    try {
        existingUser = await userRepository.findUserByEmail(email);
    }
    catch (err) {
        throw new HttpError('Signing up faild. Please, try again later', 500);
    }
    if (!existingUser) {
        throw new HttpError('Invalid credentials. Could not log you in', 401);
    }
    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
        throw new HttpError('Invalid credentials. Could not log you in', 401);
    }
    let token;
    try {
        token = jwt.sign({ userId: existingUser._id, email: existingUser.email }, process.env.TOKEN_SECRET, { expiresIn: '8h' });
    }
    catch (err) {
        throw new HttpError('Loggin in failed. Please try again later', 500);
    }
    return token;
};
const authUser = async (userId) => {
    let loginUser;
    try {
        loginUser = await userRepository.findUserById(userId);
    }
    catch (err) {
        throw new HttpError('Could not find user', 404);
    }
    return loginUser;
};
export const userService = {
    getAllUsers,
    register,
    login,
    authUser
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXNlci91c2VyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE9BQU8sTUFBTSxNQUFNLHlCQUF5QixDQUFDO0FBQzdDLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDM0IsSUFBSSxLQUFpQixDQUFBO0lBQ3JCLElBQUk7UUFDQSxLQUFLLEdBQUcsTUFBTSxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUE7S0FDN0M7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDN0U7SUFFRCxPQUFPLEtBQUssQ0FBQTtBQUNoQixDQUFDLENBQUE7QUFFRCxNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDckUsSUFBSSxZQUFzQixDQUFBO0lBQzFCLElBQUk7UUFDQSxZQUFZLEdBQUcsTUFBTSxjQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQzdEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixNQUFNLElBQUksU0FBUyxDQUFDLDRDQUE0QyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQ3pFO0lBRUQsSUFBSSxZQUFZLEVBQUU7UUFDZCxNQUFNLElBQUksU0FBUyxDQUFDLDhDQUE4QyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQzNFO0lBRUQsSUFBSSxhQUFhLENBQUE7SUFDakIsSUFBSTtRQUNBLGFBQWEsR0FBRyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtLQUN2RTtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsTUFBTSxJQUFJLFNBQVMsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUN6RTtJQUVELE9BQU8sYUFBYSxDQUFBO0FBQ3hCLENBQUMsQ0FBQTtBQUVELE1BQU0sS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQ3BELElBQUksWUFBc0IsQ0FBQTtJQUMxQixJQUFJO1FBQ0EsWUFBWSxHQUFHLE1BQU0sY0FBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUM3RDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsTUFBTSxJQUFJLFNBQVMsQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUN4RTtJQUVELElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDZixNQUFNLElBQUksU0FBUyxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQ3hFO0lBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFN0UsSUFBSSxDQUFDLGVBQWUsRUFBRTtRQUNsQixNQUFNLElBQUksU0FBUyxDQUFDLDJDQUEyQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBQ3hFO0lBRUQsSUFBSSxLQUFhLENBQUE7SUFDakIsSUFBSTtRQUNBLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0tBQzNIO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixNQUFNLElBQUksU0FBUyxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0tBRXZFO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDaEIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzlCLElBQUksU0FBUyxDQUFDO0lBQ2QsSUFBSTtRQUNBLFNBQVMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDeEQ7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDbEQ7SUFDRCxPQUFPLFNBQVMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDdkIsV0FBVztJQUNYLFFBQVE7SUFDUixLQUFLO0lBQ0wsUUFBUTtDQUNYLENBQUMifQ==