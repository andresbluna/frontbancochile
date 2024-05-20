import { TestBed } from '@angular/core/testing';

import { DatosfinancierosService } from './datosfinancieros.service';

describe('DatosfinancierosService', () => {
  let service: DatosfinancierosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosfinancierosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
