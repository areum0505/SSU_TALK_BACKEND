import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import {
  CourseDto,
  NotificationSettingDto,
  NotificationSettingInputDto,
  UserDto,
} from './dto';

@Controller('users')
@ApiTags('사용자 정보')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  @ApiOperation({
    summary: '사용자 정보 조회',
    description: '사용자의 기본 정보를 조회합니다.',
  })
  @ApiResponse({ status: 200, type: UserDto })
  getUserInfo(): UserDto {
    return this.usersService.getUserInfo();
  }

  @Get('/notifications')
  @ApiOperation({
    summary: '알림 설정 조회',
    description: '사용자의 알림 설정 상태를 가져옵니다.',
  })
  @ApiResponse({ status: 200, type: NotificationSettingDto })
  getNotificationSettings(): NotificationSettingDto {
    return this.usersService.getNotificationSettings();
  }

  @Post('/notifications')
  @ApiOperation({
    summary: '알림 설정 변경',
    description: '사용자의 알림 설정을 업데이트합니다.',
  })
  @ApiBody({ type: NotificationSettingInputDto })
  @ApiResponse({ status: 200, type: NotificationSettingDto })
  updateNotificationSettings(
    @Param('userId') userId: string,
    @Body() createDto: NotificationSettingInputDto,
  ): NotificationSettingDto {
    return this.usersService.updateNotificationSettings(createDto);
  }

  @Get('/courses')
  @ApiOperation({
    summary: '과목 리스트 조회',
    description: '사용자의 수강 과목 목록을 조회합니다.',
  })
  @ApiResponse({ status: 200, type: CourseDto, isArray: true })
  getUserCourses(): CourseDto[] {
    return this.usersService.getUserCourses();
  }
}
