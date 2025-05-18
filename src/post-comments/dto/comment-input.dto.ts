import { ApiProperty } from '@nestjs/swagger';

export class CommentInputDto {
  @ApiProperty({
    description: '댓글',
    example: 'ㅎㅇㅎㅇ',
  })
  public description!: string;

  @ApiProperty({
    description: '익명 여부',
    example: true,
  })
  public anonymity!: boolean;
}
