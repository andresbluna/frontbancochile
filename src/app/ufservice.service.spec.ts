import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './ufservice.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch UF data correctly', () => {
    const expectedData = { value: 12345 };
    service.getUfData().subscribe(data => {
      expect(data).toEqual(expectedData);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/uf');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
  });
});
