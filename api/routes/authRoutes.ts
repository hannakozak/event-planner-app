import express from "express";
import { authController } from "../controllers/authController";
import { checkAuth } from "../middleware/checkAuth";
import { fileUpload } from "../middleware/fileUpload";

export const authRoutes = express.Router();

authRoutes.get('/', authController.getUsers)

authRoutes.get('/authUser', checkAuth, authController.authUser)

authRoutes.post('/signup', authController.signup)

authRoutes.post('/login', authController.login)

authRoutes.get('/logout', authController.logout)