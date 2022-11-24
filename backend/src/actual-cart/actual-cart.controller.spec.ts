import { Test, TestingModule } from '@nestjs/testing';
import { ActualCartController } from './actual-cart.controller';
import { ActualCartService } from './actual-cart.service';

describe('ActualCartController', () => {
  let controller: ActualCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActualCartController],
      providers: [ActualCartService],
    }).compile();

    controller = module.get<ActualCartController>(ActualCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
