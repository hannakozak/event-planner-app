import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import * as fs from 'fs';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import { userRoutes } from './user/user-routes';
import { eventRoutes } from './event/event-routes';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const connectDatabase = (): void => {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
    mongoose.set('strictQuery', true);
    console.log('mongo database is connected');
  } catch (error) {
    console.error('mongo database connection error');
  }
};

connectDatabase();
const port = process.env.PORT;
const app: Express = express();
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

app.use(
  (
    error: { status: number; message: any },
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    res.locals.error = error;

    if (res.headersSent) {
      return next(error);
    }
    const status = error.status || 500;
    res.status(status);
    res.json({ message: error.message || 'An unknown error occurred!' });
  },
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${PORT}}`);
});
if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  );
}
