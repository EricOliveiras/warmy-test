import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '../middleware/errorMiddleware';

export const app = express();

app.use(express.json());

app.use(cors());

app.use(errorMiddleware);
