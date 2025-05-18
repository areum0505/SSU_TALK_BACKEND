import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  constructor(value?: Partial<UserDto>) {
    if (value) {
      Object.assign(this, value);
    }
  }

  @ApiProperty({
    description: '이름',
    example: '홍길동',
  })
  public name!: string;

  @ApiProperty({
    description: '학번',
    example: '20253309',
  })
  public login_id!: number;

  @ApiProperty({
    description: '이메일',
    example: 'test@gmail.com',
  })
  public email!: string;
}
