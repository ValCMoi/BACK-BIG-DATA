import { Test, TestingModule } from '@nestjs/testing';
import { MailleService } from './maille.service';

describe('MailleService', () => {
  let service: MailleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailleService],
    }).compile();

    service = module.get<MailleService>(MailleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
