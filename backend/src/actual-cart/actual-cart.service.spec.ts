import { Test, TestingModule } from '@nestjs/testing';
import { ActualCartService } from './actual-cart.service';

describe('ActualCartService', () => {
  let service: ActualCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActualCartService],
    }).compile();

    service = module.get<ActualCartService>(ActualCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
