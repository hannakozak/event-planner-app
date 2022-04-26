import express from "express";
import { authController } from "../controllers/authController";

export const authRoutes = express.Router();

authRoutes.get('/', authController.getUsers)

authRoutes.post('/signup', authController.signup)

authRoutes.post('/login', authController.login)