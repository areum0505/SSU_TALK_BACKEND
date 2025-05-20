import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { PostCommentsService } from './post-comments.service';
import { CommentDto, CommentInputDto } from './dto';

@ApiTags('댓글')
@Controller('posts/:postId/comments')
export class PostCommentsController {
  constructor(private readonly commentsService: PostCommentsService) {}

  @Get()
  @ApiOperation({
    summary: '댓글 목록 조회',
    description: '해당 게시글의 댓글 목록을 조회합니다.',
  })
  @ApiParam({ name: 'postId', description: '게시글 ID', example: 1 })
  @ApiResponse({ status: 200, type: CommentDto, isArray: true })
  getComments(@Param('postId') postId: string): CommentDto[] {
    return this.commentsService.findAllByPostId(postId);
  }

  @Post()
  @ApiOperation({
    summary: '댓글 작성',
    description: '해당 게시글에 댓글을 작성합니다.',
  })
  @ApiParam({ name: 'postId', description: '게시글 ID', example: 1 })
  @ApiBody({ type: CommentInputDto })
  @ApiResponse({ status: 201, description: '댓글 작성 성공', type: CommentDto })
  createComment(
    @Param('postId') postId: string,
    @Body() createCommentDto: CommentInputDto,
  ): CommentDto {
    return this.commentsService.create(postId, createCommentDto);
  }

  @Delete(':commentId')
  @ApiOperation({
    summary: '댓글 삭제',
    description: '해당 댓글을 삭제합니다.',
  })
  deleteComment(
    @Param('postId') postId: string,
    @Param('commentId') commentId: string,
  ): void {
    this.commentsService.remove(postId, commentId);
  }

  @Post(':commentId/like')
  @ApiOperation({
    summary: '댓글 좋아요',
    description: '특정 댓글에 좋아요를 누릅니다.',
  })
  @ApiResponse({
    status: 200,
    description: '좋아요 성공/취소',
  })
  @ApiResponse({ status: 200, type: CommentDto })
  likePost(@Param('commentId') commentId: string): CommentDto {
    return this.commentsService.likePost(commentId);
  }
}
