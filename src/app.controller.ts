// 특정요청(경로)이 있을 때 거기에 맞는 액션 실행하도록 하는 기능(Routing)
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
