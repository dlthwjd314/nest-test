import { Contact, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    get(id: any): Promise<Contact>;
    getAll(): Promise<Contact[]>;
    create(contactCreateInput: Prisma.ContactCreateInput): Promise<Contact>;
    update(id: number, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
    delete(id: number): Promise<Contact>;
}
