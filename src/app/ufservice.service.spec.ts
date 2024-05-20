import { TestBed } from '@angular/core/testing';

import { UfserviceService } from './ufservice.service';

describe('UfserviceService', () => {
  let service: UfserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
