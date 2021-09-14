import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { DeleteResult } from 'typeorm';

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

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  //  updateTaskStatus(id: string, status: TaskStatus) {
  //    const task = this.getTaskById(id);
  //    task.status = status;
  //    return task;
  //  }
  //

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID '${id}' not found`);
    }
  }

  //--- My solution using DeleteResult
  //
  //  async deleteTask(id: string): Promise<DeleteResult> {
  //    return await this.tasksRepository.delete(id);
  //  }
}
