import { TestBed } from '@angular/core/testing';

import { RandomNumService } from './random-num.service';

describe('RandomNumService', () => {
  let service: RandomNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
