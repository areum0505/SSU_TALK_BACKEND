import { Injectable } from '@nestjs/common';
import { FindPostDto, PostDto, PostInputDto } from './dto';

@Injectable()
export class PostsService {
  findAll(courseId: string): FindPostDto[] {
    return [];
  }
  findOne(courseId: string, postId: string): PostDto {
    return new PostDto();
  }
  create(createPostDto: PostInputDto): PostDto {
    return new PostDto();
  }
  update(postId: string, updatePostDto: PostInputDto): PostDto {
    return new PostDto();
  }
  remove(postId: string): void {}

  likePost(postId: string): PostDto {
    return new PostDto();
  }
}
