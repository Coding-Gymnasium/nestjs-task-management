import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto, GetTasksFilterDto } from './dto';

@Injectable()
export class TasksService {
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
  //  getTaskById(id: string): Task {
  //    // try to get task
  //    // if not found, throw an error (404 not found)
  //    // otherwise, return the found task
  //    const found = this.tasks.find((task) => task.id === id);
  //
  //    if (!found) {
  //      /** is possible to use a custom message.*/
  //      // throw new NotFoundException(`Task with ID ${id} not found`);
  //      throw new NotFoundException();
  //    }
  //
  //    return found;
  //  }
  //
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
