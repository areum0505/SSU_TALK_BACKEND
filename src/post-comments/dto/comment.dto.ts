import { ApiProperty } from '@nestjs/swagger';

export class CommentDto {
  constructor(value?: Partial<CommentDto>) {
    if (value) {
      Object.assign(this, value);
    }
  }

  @ApiProperty({
    description: '댓글 ID',
    example: 2,
  })
  public commentId!: number;

  @ApiProperty({
    description: '게시글 ID',
    example: 2,
  })
  public postId!: number;

  @ApiProperty({
    description: '작성자 ID',
    example: 1,
    required: false,
  })
  public userId?: number;

  @ApiProperty({
    description: '작성자 이름',
    example: '홍길동',
    required: false,
  })
  public displayName?: string;

  @ApiProperty({
    description: '댓글',
    example: 'ㅎㅇㅎㅇ',
    required: false,
  })
  public comment?: string;

  @ApiProperty({
    description: '익명 여부',
    example: true,
    required: false,
  })
  public anonymity?: boolean;

  @ApiProperty({
    description: '생성날짜',
    example: '2025-05-16 09:50',
    required: false,
  })
  public created_at?: string;
}
