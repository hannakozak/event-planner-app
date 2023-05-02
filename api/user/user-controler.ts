import { Request, Response, NextFunction } from 'express';
import { UserType } from './user-model';
import { userService } from './user-service';
import { RequestWithUser } from './user-types';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  let users: UserType[];
  try {
    users = await userService.getAllUsers();
  } catch (err) {
    return next(err);
  }
  res.status(200);
  res.json({ users });
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  let createdUserId;
  try {
    createdUserId = await userService.register(name, email, password);
  } catch (err) {
    return next(err);
  }

  res.status(201);
  res.json({ userId: createdUserId });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  let token: string;
  try {
    token = await userService.login(email, password);
  } catch (err) {
    return next(err);
  }

  res.cookie('nToken', token, {
    maxAge: 900000,
    httpOnly: true,
    domain: 'event-frontend-0lj5.onrender.com',
    sameSite: 'strict',
  });
  res.status(200);
  res.json({ message: 'Log in' });
};

const logout = (req: Request, res: Response) => {
  res.clearCookie('nToken');
  res.status(200);
  res.json({ message: 'Log out' });
};

const authUser = async (req: Request, res: Response, next: NextFunction) => {
  const userRequest = req as RequestWithUser;
  const userId = userRequest.user._id;
  let loginUser;
  try {
    loginUser = await userService.authUser(userId);
  } catch (err) {
    return next(err);
  }
  res.status(200);
  res.json({ data: loginUser });
};

export const userControler = {
  getAllUsers,
  authUser,
  register,
  login,
  logout,
};
