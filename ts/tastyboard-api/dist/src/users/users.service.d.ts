import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}
