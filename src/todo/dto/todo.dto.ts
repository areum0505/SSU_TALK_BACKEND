import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../enum';

export class TodoDto {
  constructor(value?: Partial<TodoDto>) {
    if (value) {
      Object.assign(this, value);
    }
  }
  @ApiProperty({
    description: '제목',
    example: '로고 아이디어 리서치 및 스케치',
  })
  public title!: string;

  @ApiProperty({
    description: '과목 id',
    example: '35749',
  })
  public courseId!: number;

  @ApiProperty({
    description: '과목 이름',
    example: '미디어제작',
  })
  public courseName!: string;

  @ApiProperty({
    description: '과제 유형 (과제 or 퀴즈)',
    example: Type.ASSIGNEMTS,
    enum: Type,
  })
  public type!: Type;

  @ApiProperty({
    description: '마감 일자',
    example: '2025-05-08T13:00:00Z',
  })
  public due_at!: string;

  @ApiProperty({
    description: '과제/퀴즈 링크',
    example: 'https://canvas.ssu.ac.kr/courses/35749/assignments/686666#submit',
    required: false,
  })
  public link?: string;

  @ApiProperty({
    description: '생성날짜',
    example: '2025-05-16 09:50',
    required: false,
  })
  public created_at?: string;

  @ApiProperty({
    description: '업데이트 날짜',
    example: '2025-05-16 09:50',
    required: false,
  })
  public updated_at?: string;
}
