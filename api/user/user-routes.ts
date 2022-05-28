import express from "express";
import { userControler } from "./user-controler";
import { checkAuth } from "../middleware/checkAuth";
import { fileUpload } from "../middleware/fileUpload";
import { validate } from '../middleware/validate'
import { loginSchema, registerSchema } from "./user-validation";

export const userRoutes = express.Router();

userRoutes.get('/', userControler.getAllUsers)

userRoutes.get('/authUser', checkAuth, userControler.authUser)

userRoutes.post('/register', validate(registerSchema), fileUpload.single('image'), userControler.register)

userRoutes.post('/login', validate(loginSchema), userControler.login)

userRoutes.get('/logout', userControler.logout)