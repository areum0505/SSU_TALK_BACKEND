import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  constructor(value?: Partial<PostDto>) {
    if (value) {
      Object.assign(this, value);
    }
  }

  @ApiProperty({
    description: '게시글 ID',
    example: 2,
  })
  public postId!: number;

  @ApiProperty({
    description: '과목 ID',
    example: 11111,
  })
  public courseId!: number;

  @ApiProperty({
    description: '게시글 제목',
    example: '글 제목2',
    required: false,
  })
  public title?: string;

  @ApiProperty({
    description: '게시글 내용',
    example: '글 내용',
    required: false,
  })
  public description?: string;

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
    description: '익명 여부',
    example: true,
    required: false,
  })
  public anonymity?: boolean;

  @ApiProperty({
    description: '게시글 좋아요 수',
    example: 100,
    required: false,
  })
  public likeCnt?: number;

  @ApiProperty({
    description: '게시글 댓글 수',
    example: 12,
    required: false,
  })
  public commentCnt?: number;

  @ApiProperty({
    description: '생성날짜',
    example: '2025-05-16 09:50',
    required: false,
  })
  public created_at?: string;
}
