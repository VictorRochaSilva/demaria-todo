import { IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  title?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  completed?: boolean;
}
