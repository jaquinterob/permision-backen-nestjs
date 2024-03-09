import { Test, TestingModule } from '@nestjs/testing';
import { PermisionsService } from './permisions.service';

describe('PermisionsService', () => {
  let service: PermisionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermisionsService],
    }).compile();

    service = module.get<PermisionsService>(PermisionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
