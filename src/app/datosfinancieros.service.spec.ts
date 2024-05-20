import { TestBed } from '@angular/core/testing';

import { DatosFinancierosService } from './datosfinancieros.service';

describe('DatosfinancierosService', () => {
  let service: DatosFinancierosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosFinancierosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
