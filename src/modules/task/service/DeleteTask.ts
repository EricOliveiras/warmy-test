import { HttpException } from '../../../errors/HttpException';
import { TaskRepoitory } from '../repository/TaskRepository';

export class DeleteTask {
  constructor(private taskRepository: TaskRepoitory) {}

  public async execute(id: string) {
    const task = await this.taskRepository.read(id);

    if (!task) {
      throw new HttpException(404, 'Task not found.');
    }

    await this.taskRepository.delete(id);
  }
}
