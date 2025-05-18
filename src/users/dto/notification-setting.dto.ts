import { ApiProperty } from '@nestjs/swagger';

export class NotificationSettingDto {
  constructor(value?: Partial<NotificationSettingDto>) {
    if (value) {
      Object.assign(this, value);
    }
  }
  @ApiProperty({
    description: 'notification id',
    example: '1',
  })
  public notificationId!: number;

  @ApiProperty({
    description: '사용자 id',
    example: '1',
  })
  public userId!: number;

  @ApiProperty({
    description: '과제 생성 알림',
    example: 'true',
  })
  public isAssignmentsNotificationOn!: boolean;

  @ApiProperty({
    description: '퀴즈 생성 알림',
    example: 'true',
  })
  public isQuizzesNotificationOn!: boolean;
}
