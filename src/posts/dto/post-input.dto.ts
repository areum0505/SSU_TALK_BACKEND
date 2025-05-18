import { ApiProperty } from '@nestjs/swagger';

export class PostInputDto {
  @ApiProperty({
    description: '게시글 제목',
    example: '글 제목2',
  })
  public title!: string;

  @ApiProperty({
    description: '게시글 내용',
    example: '글 내용',
  })
  public description!: string;

  @ApiProperty({
    description: '익명 여부',
    example: true,
  })
  public anonymity!: boolean;
}
