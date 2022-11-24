import { Test, TestingModule } from '@nestjs/testing';
import { MailleController } from './maille.controller';
import { MailleService } from './maille.service';

describe('MailleController', () => {
  let controller: MailleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailleController],
      providers: [MailleService],
    }).compile();

    controller = module.get<MailleController>(MailleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
