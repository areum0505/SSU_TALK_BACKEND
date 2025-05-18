import { ApiProperty } from '@nestjs/swagger';

export class CourseDto {
  constructor(value?: Partial<CourseDto>) {
    if (value) {
      Object.assign(this, value);
    }
  }

  @ApiProperty({
    description: '과목 ID',
    example: 2,
  })
  public courseId!: number;

  @ApiProperty({
    description: '과목 이름',
    example: '미디어제작',
  })
  public name!: string;
}
