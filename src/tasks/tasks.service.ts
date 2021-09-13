import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TaskStatus } from './task-status.enum';
import { CreateTaskDto, GetTasksFilterDto } from './dto';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  //  getAllTasks(): Task[] { return this.tasks }
  //
  //  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //    const { status, search } = filterDto;
  //
  //    let tasks = this.getAllTasks();
  //
  //    if (status) {
  //      tasks = tasks.filter((task) => task.status === status);
  //    }
  //
  //    if (search) {
  //      tasks = tasks.filter((task) => {
  //        if (task.title.includes(search) || task.description.includes(search)) {
  //          return true;
  //        }
  //        return false;
  //      });
  //    }
  //
  //    return tasks;
  //  }
  //
  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.tasksRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.tasksRepository.save(task);
    return task;
  }

  //  createTask(createTaskDto: CreateTaskDto): Task {
  //    const { title, description } = createTaskDto;
  //    const task: Task = {
  //      id: uuid(),
  //      title,
  //      description,
  //      status: TaskStatus.OPEN,
  //    };
  //
  //    this.tasks.push(task);
  //    return task;
  //  }
  //
  //  updateTaskStatus(id: string, status: TaskStatus) {
  //    const task = this.getTaskById(id);
  //    task.status = status;
  //    return task;
  //  }
  //
  //  deleteTask(id: string): void {
  //    const found = this.getTaskById(id);
  //    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  //  }
}
