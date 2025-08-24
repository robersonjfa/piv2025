import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}
