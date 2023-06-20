import { Router } from 'express';
import { TaskController } from '../modules/task/controller/TaskController';

export const taskRouter = Router();

const taskController = new TaskController();

taskRouter.post('/', taskController.create);
taskRouter.get('/', taskController.readAll);
taskRouter.get('/:id', taskController.read);
taskRouter.put('/:id', taskController.update);
taskRouter.delete('/:id', taskController.delete);
