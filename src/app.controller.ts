import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getApiInfo() {
    return {
      version: '1.0.0',
      description: 'API de gerenciamento de tarefas',
      status: 'OK',
    };
  }
}
