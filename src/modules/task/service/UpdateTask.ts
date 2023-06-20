import { HttpException } from '../../../errors/HttpException';
import { TaskRepoitory } from '../repository/TaskRepository';
import { ITask } from '../interface/ITask';

export class UpdateTask {
  constructor(private taskRepository: TaskRepoitory) {}

  public async execute(id: string, task: ITask) {
    const getTask = await this.taskRepository.read(id);

    if (!getTask) {
      throw new HttpException(404, 'Task not found.');
    }

    await this.taskRepository.update(id, task);
  }
}
