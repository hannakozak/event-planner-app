import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './database/connectDatabase';
import morgan from "morgan";

dotenv.config();

const app: Express = express();
app.use(morgan("dev"));
const port = process.env.PORT;

connectDatabase()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(express.static('./public'))

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});