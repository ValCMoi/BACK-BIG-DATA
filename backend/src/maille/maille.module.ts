import { Module } from '@nestjs/common';
import { MailleService } from './maille.service';
import { MailleController } from './maille.controller';

@Module({
  controllers: [MailleController],
  providers: [MailleService]
})
export class MailleModule {}
