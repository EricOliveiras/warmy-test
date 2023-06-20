import { Task } from '@prisma/client';
import { ITask } from './ITask';

export interface ITaskRepository {
  create(task: ITask): Promise<void>;
  readAll(): Promise<Task[] | null>
  read(id: string): Promise<Task | null>;
  update(id: string, task: ITask): Promise<void>;
  delete(id: string): Promise<void>;
}
