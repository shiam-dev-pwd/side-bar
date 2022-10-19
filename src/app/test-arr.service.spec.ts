import { TestBed } from '@angular/core/testing';

import { TestArrService } from './test-arr.service';

describe('TestArrService', () => {
  let service: TestArrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestArrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
