import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger: Logger;

  constructor() {
    this.logger = new Logger(AppService.name);
  }

  getHello(): string {
    this.logger.log("Get Hello Function has been called!")
    return 'Hello World!';
  }

  getHelloFromPost(): string {
    return 'Hello World from Post Request!';
  }
}
