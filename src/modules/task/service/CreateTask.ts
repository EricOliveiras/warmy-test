import { ITask } from '../interface/ITask';
import { TaskRepoitory } from '../repository/TaskRepository';

export class CreateTask {
  constructor(private taskRepository: TaskRepoitory) {}

  public async execute(task: ITask) {
    await this.taskRepository.create(task);
  }
}
