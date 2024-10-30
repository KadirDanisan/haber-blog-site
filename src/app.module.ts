import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { CommentModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CommentModule,
    CategoriesModule,
    PostsModule,
    TagsModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
