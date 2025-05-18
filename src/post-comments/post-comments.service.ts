import { Injectable } from '@nestjs/common';
import { CommentDto, CommentInputDto } from './dto';

@Injectable()
export class PostCommentsService {
  findAllByPostId(postId: string): CommentDto[] {
    return [];
  }
  create(postId: string, createCommentDto: CommentInputDto): CommentDto {
    return new CommentDto();
  }
  remove(postId: string, commentId: string) {}

  likePost(commentId: string): CommentDto {
    return new CommentDto();
  }
}
