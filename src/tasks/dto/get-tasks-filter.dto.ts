import { TaskStatus } from '../task.model';
import { IsEnum, IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  search?: string;
}
