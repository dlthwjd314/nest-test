import { Injectable } from '@nestjs/common';
import { Contact, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class ContactsService {
    //액션 구현
    constructor(private prisma: PrismaService){}

    async get(id): Promise<Contact>{
        return this.prisma.contact.findUnique({ where: {id}});
    }

    async getAll(): Promise<Contact[]>{
        return await this.prisma.contact.findMany();
    }

    async create(
        contactCreateInput: Prisma.ContactCreateInput,
    ): Promise<Contact> {
        return await this.prisma.contact.create({
            data: contactCreateInput,
        });
    }

    async update(
        id: number,
        contactUpdateInput: Prisma.ContactUpdateInput,
    ): Promise<Contact> {
        return await this.prisma.contact.update({
            where: {id},
            data: contactUpdateInput,
        });
    }

    async delete(id: number): Promise<Contact> {
        return await this.prisma.contact.delete({ where: { id } });
      }
}
