import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts';
import { PostCommentsModule } from './post-comments';
import { TodoModule } from './todo';
import { UsersModule } from './users';

@Module({
  imports: [PostsModule, PostCommentsModule, TodoModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
