import { ApiProperty } from '@nestjs/swagger';

export class NotificationSettingInputDto {
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
