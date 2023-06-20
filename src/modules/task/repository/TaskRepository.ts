import { ITaskRepository } from '../interface/ITaskRepository';
import { prisma as db } from '../../../database/prisma';
import { ITask } from '../interface/ITask';
import { Task } from '@prisma/client';

export class TaskRepoitory implements ITaskRepository {
  async create(task: ITask): Promise<void> {
    await db.task.create({
      data: task
    });
  }

  async readAll(): Promise<Task[] | null> {
    return await db.task.findMany();
  }

  async read(id: string): Promise<Task | null> {
    return await db.task.findUnique({
      where: { id: id }
    });
  }

  async update(id: string, task: ITask): Promise<void> {
    await db.task.update({
      where: { id: id },
      data: task
    });
  }

  async delete(id: string): Promise<void> {
    await db.task.delete({
      where: { id: id }
    });
  }
}
