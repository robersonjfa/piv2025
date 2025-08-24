import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly service;
    constructor(service: CategoriesService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}
