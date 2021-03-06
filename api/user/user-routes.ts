import express from "express";
import { userControler } from "./user-controler";
import { checkAuth } from "../middleware/checkAuth";
import { validate } from '../middleware/validate'
import { loginSchema, registerSchema } from "./user-validation";

export const userRoutes = express.Router();

userRoutes.get('/', userControler.getAllUsers)

userRoutes.get('/authUser', checkAuth, userControler.authUser)

userRoutes.post('/register', validate(registerSchema), userControler.register)

userRoutes.post('/login', validate(loginSchema), userControler.login)

userRoutes.get('/logout', userControler.logout)