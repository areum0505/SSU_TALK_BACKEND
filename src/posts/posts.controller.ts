import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindPostDto, PostDto, PostInputDto } from './dto';

@ApiTags('게시글')
@Controller('courses/:courseId/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({
    summary: '게시글 전체 조회',
    description: '특정 과목에 해당하는 게시글 전체 조회',
  })
  @ApiResponse({ status: 200, type: FindPostDto, isArray: true })
  findAllByCourse(@Param('courseId') courseId: string): FindPostDto[] {
    return this.postsService.findAll(courseId);
  }

  @Get(':postId')
  @ApiOperation({
    summary: '게시글 조회',
    description: '특정 과목에 해당하는 게시글 상세 조회',
  })
  @ApiResponse({ status: 200, type: PostDto })
  findOne(
    @Param('courseId') courseId: string,
    @Param('postId') postId: string,
  ): PostDto {
    return this.postsService.findOne(courseId, postId);
  }

  @Post()
  @ApiOperation({
    summary: '게시글 작성',
    description: '특정 과목에 해당하는 게시글 작성',
  })
  @ApiResponse({ status: 200, type: PostDto })
  create(@Body() createPostDto: PostInputDto): PostDto {
    return this.postsService.create(createPostDto);
  }

  @Post(':postId')
  @ApiOperation({
    summary: '게시글 수정',
    description: '특정 과목에 해당하는 게시글 수정',
  })
  @ApiBody({ type: PostInputDto }) // 👈 요청 바디 표시
  @ApiResponse({ status: 200, type: PostDto })
  update(
    @Param('postId') postId: string,
    @Body() updatePostDto: PostInputDto,
  ): PostDto {
    return this.postsService.update(postId, updatePostDto);
  }

  @Delete(':postId')
  @ApiOperation({
    summary: '게시글 삭제',
    description: '특정 과목에 해당하는 게시글 삭제',
  })
  remove(@Param('postId') postId: string): void {
    this.postsService.remove(postId);
  }

  @Post(':postId/like')
  @ApiOperation({
    summary: '게시글 좋아요',
    description: '특정 게시글에 좋아요를 누릅니다.',
  })
  @ApiResponse({
    status: 200,
    description: '좋아요 성공/취소',
  })
  @ApiResponse({ status: 200, type: PostDto })
  likePost(@Param('postId') postId: string): PostDto {
    return this.postsService.likePost(postId);
  }
}
