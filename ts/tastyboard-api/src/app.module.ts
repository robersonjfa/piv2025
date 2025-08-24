import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, RecipesModule, UsersModule, CategoriesModule],
})
export class AppModule {}
