import express from "express";
import { userControler } from "./user-controler";
import { checkAuth } from "../middleware/checkAuth";
import { fileUpload } from "../middleware/fileUpload";

export const userRoutes = express.Router();

userRoutes.get('/', userControler.getAllUsers)

userRoutes.get('/authUser', checkAuth, userControler.authUser)

userRoutes.post('/register', userControler.register)

userRoutes.post('/login', userControler.login)

userRoutes.get('/logout', userControler.logout)