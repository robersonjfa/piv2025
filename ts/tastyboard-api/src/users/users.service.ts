import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  list() { return this.prisma.user.findMany({ orderBy: { createdAt: 'desc' } }); }
}
