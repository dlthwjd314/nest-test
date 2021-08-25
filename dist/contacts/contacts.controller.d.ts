import { Contact, Prisma } from '@prisma/client';
import { ContactsService } from './contacts.service';
export declare class ContactsController {
    private contactService;
    constructor(contactService: ContactsService);
    getAll(): Promise<Contact[]>;
    get(id: any): Promise<Contact>;
    create(contactCreateInput: Prisma.ContactCreateInput): Promise<Contact>;
    delete(id: any): Promise<Contact>;
    update(id: any, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
}
