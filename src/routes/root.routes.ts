import { Request, Response, Router } from 'express';

export const rootRouter = Router();

rootRouter.use('/', (request: Request, response: Response) => {
  response.send('Warmy Api');
});
