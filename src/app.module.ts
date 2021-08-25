// nest에서 가장 기본이 되는 구성요소
//여러모듈의 조합 -> 하나의 어플리케이션
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { PrismaService } from './contacts/prisma.service';

@Module({
  imports: [ContactsModule], //nest g mo contacts (종속성 추가)
  controllers: [AppController],// nest g co contacts 명령어 통해 생성된 controller 자동 연결 -> 종속성 제거(contacts.module에 종속성 추가할 것.)
  providers: [AppService, PrismaService], // nest g s contacts 명령어 통한 service 등록 -> 종속성 제거(contacts.module에 종속성 추가할 것.)
})
export class AppModule {}
