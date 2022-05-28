import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './database/connectDatabase';
import morgan from "morgan";
import * as fs from 'fs';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import { userRoutes } from './user/user-routes';
import cors from "cors";

dotenv.config();
connectDatabase()

const port = process.env.PORT;
const app: Express = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use(morgan("dev"));
app.use(express.json())
app.use(cookieParser())
app.use('uploads/images', express.static(path.join('uploads', 'images')))

app.use('/api/users', userRoutes)


app.use((error, req, res, next) => {
  res.locals.error = error;
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  const status = error.status || 500;
  res.status(status);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

