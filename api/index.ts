import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './database/connectDatabase';
import morgan from "morgan";
import * as fs from 'fs';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import { userRoutes } from './user/user-routes';

dotenv.config();
connectDatabase()

const port = process.env.PORT;
const app: Express = express();

app.use(morgan("dev"));
app.use(express.json())
app.use(cookieParser())
app.use('uploads/images', express.static(path.join('uploads', 'images')))

app.use('/api/users', userRoutes)

app.use((error, req: Request, res: Response, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => console.log(err))
  }
  if (res.headersSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'Unknown error occured!' })
})

app.use('../client.public', express.static('public'))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

