import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('과제/퀴즈')
@Controller('user/self/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('/quizzes')
  @ApiOperation({
    summary: '남은 퀴즈 조회',
    description: '전체 과목의 남은 퀴즈 조회',
  })
  @ApiResponse({ status: 200, type: TodoDto, isArray: true })
  getQuizs(): TodoDto[] {
    return this.todoService.getQuizs();
  }

  @Get('/assignments')
  @ApiOperation({
    summary: '남은 과제 조회',
    description: '전체 과목의 남은 과제 조회',
  })
  @ApiResponse({ status: 200, type: TodoDto, isArray: true })
  getAssignments() {
    return this.todoService.getQuizs();
  }
}
