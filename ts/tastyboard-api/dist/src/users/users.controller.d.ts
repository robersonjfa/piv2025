import { UsersService } from './users.service';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    list(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
}
