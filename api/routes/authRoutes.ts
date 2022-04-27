import express from "express";
import { authController } from "../controllers/authController";
import { fileUpload } from "../middleware/fileUpload";

export const authRoutes = express.Router();

authRoutes.get('/', authController.getUsers)

authRoutes.post('/signup', fileUpload.single('avatar'), authController.signup)

authRoutes.post('/login', authController.login)