import { TaskRepoitory } from '../repository/TaskRepository';

export class ReadAllTasks {
  constructor(private taskRepository: TaskRepoitory) {}

  public async execute() {
    return await this.taskRepository.readAll();
  }
}
