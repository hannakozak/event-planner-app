import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './database/connectDatabase';
import morgan from "morgan";
import * as fs from 'fs';
import * as path from 'path';
import { authRoutes } from './routes/authRoutes'

dotenv.config();

const app: Express = express();

app.use('uploads/images', express.static(path.join('uploads', 'images')))
app.use(morgan("dev"));
const port = process.env.PORT;

connectDatabase()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(express.json())

app.use('/api/users', authRoutes)

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

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});