import { Request, Response } from 'express';
import { ITask } from '../interface/ITask';
import { CreateTask, DeleteTask, ReadAllTasks, ReadTask, UpdateTask } from '../service';
import { TaskRepoitory } from '../repository/TaskRepository';

const taskRepository = new TaskRepoitory();

export class TaskController {
  public async create(request: Request, response: Response) {
    const { title, description }: ITask = request.body;

    const createTask = new CreateTask(taskRepository);

    await createTask.execute({ title, description });

    return response.status(201).json({
      message: 'Task created successfully.'
    });
  }

  public async readAll(request: Request, response: Response) {
    const readAllTasks = new ReadAllTasks(taskRepository);

    const taks = await readAllTasks.execute();

    return response.status(200).json({
      message: 'Tasks returned successfully.',
      data: taks
    });
  }

  public async read(request: Request, response: Response) {
    const { id } = request.params;

    const readTask = new ReadTask(taskRepository);

    const task = await readTask.execute(id);

    return response.status(200).json({
      message: 'Task returned successfully.',
      data: task
    });
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, finished }: ITask = request.body;

    const updateTask = new UpdateTask(taskRepository);

    await updateTask.execute(id, {
      title,
      description,
      finished
    });

    return response.status(200).json({
      message: 'Task updated successfully.',
    });
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTask = new DeleteTask(taskRepository);

    await deleteTask.execute(id);

    return response.status(200).json({
      message: 'Task deleted successfully.'
    });
  }
}
