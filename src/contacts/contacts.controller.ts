import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Contact, Prisma } from '@prisma/client';
import { identity } from 'rxjs';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private contactService: ContactsService){} // ContactService를 의존서 주입해서 사용

    @Get() 
    async getAll():Promise<Contact[]>{
        return await this.contactService.getAll();
    }

    @Get('/:id')
    async get(@Param('id') id): Promise<Contact> {
        return await this.contactService.get(Number(id));
    }

    @Post()
    async create(
        @Body() contactCreateInput: Prisma.ContactCreateInput,
    ): Promise<Contact>{
        return await this.contactService.create(contactCreateInput);
    }

    @Delete('/:id')
    delete(@Param('id') id){
        return this.contactService.delete(Number(id));
    }

    @Put('/:id')
    update(
        @Param('id') id,
        @Body() contactUpdateInput: Prisma.ContactUpdateInput,
    ){
        return this.contactService.update(Number(id), contactUpdateInput);
    }
}

