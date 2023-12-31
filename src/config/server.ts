import express from 'express';
import cors from 'cors';
import { errorMiddleware } from '../middleware/errorMiddleware';
import { router } from '../routes';

export const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use(errorMiddleware);
