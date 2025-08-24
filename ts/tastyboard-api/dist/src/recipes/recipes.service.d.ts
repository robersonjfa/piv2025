import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from './types/create-recipe.dto';
import { UpdateRecipeDto } from './types/update-recipe.dto';
export declare class RecipesService {
    private prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
    }[]>;
    get(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
    }>;
    create(data: CreateRecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: UpdateRecipeDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
        description: string;
        imageUrl: string | null;
        videoUrl: string | null;
        ingredients: import("@prisma/client/runtime/library").JsonValue;
        steps: import("@prisma/client/runtime/library").JsonValue;
        authorId: number | null;
        categoryId: number | null;
    }>;
    remove(id: number): Promise<{
        ok: boolean;
    }>;
}
