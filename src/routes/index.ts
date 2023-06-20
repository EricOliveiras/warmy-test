import { Router } from 'express';

import { rootRouter } from './root.routes';
import { taskRouter } from './task.routes';

export const router = Router();

router.use('/task', taskRouter);
router.use('/', rootRouter);
