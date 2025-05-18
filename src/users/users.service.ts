import { Injectable } from '@nestjs/common';
import {
  CourseDto,
  NotificationSettingDto,
  NotificationSettingInputDto,
  UserDto,
} from './dto';

@Injectable()
export class UsersService {
  getUserInfo(): UserDto {
    return new UserDto();
  }

  getNotificationSettings(): NotificationSettingDto {
    return new NotificationSettingDto();
  }

  updateNotificationSettings(
    createDto: NotificationSettingInputDto,
  ): NotificationSettingDto {
    return new NotificationSettingDto();
  }

  getUserCourses(): CourseDto[] {
    return [];
  }
}
