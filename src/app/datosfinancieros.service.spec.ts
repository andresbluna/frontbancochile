import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatosFinancierosService } from './datosfinancieros.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('DatosFinancierosService', () => {
  let service: DatosFinancierosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatosFinancierosService]
    });
    service = TestBed.inject(DatosFinancierosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch financial data', () => {
    const mockData = {
      uf: { nombre: 'UF', fecha: '2024-05-20', valor: 30000 },
      ivp: { nombre: 'IVP', fecha: '2024-05-20', valor: 10000 },
      ipc: { nombre: 'IPC', fecha: '2024-05-20', valor: 3.5 },
      utm: { nombre: 'UTM', fecha: '2024-05-20', valor: 50000 },
      imacec: { nombre: 'IMACEC', fecha: '2024-05-20', valor: 2.1 },
      tpm: { nombre: 'TPM', fecha: '2024-05-20', valor: 0.5 },
      libra_cobre: { nombre: 'Libra de Cobre', fecha: '2024-05-20', valor: 4.5 },
      tasa_desempleo: { nombre: 'Tasa de Desempleo', fecha: '2024-05-20', valor: 7.5 },
      bitcoin: { nombre: 'Bitcoin', fecha: '2024-05-20', valor: 40000 },
      dolar: { nombre: 'Dólar', fecha: '2024-05-20', valor: 800 },
      dolar_intercambio: { nombre: 'Dólar Intercambio', fecha: '2024-05-20', valor: 750 },
      euro: { nombre: 'Euro', fecha: '2024-05-20', valor: 900 }
    };

    service.obtenerDatosFinancieros().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:8080/indicators');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should handle error', () => {
    const errorMessage = 'src/assets/error_img.webp';

    service.obtenerDatosFinancieros().subscribe(
      () => fail('expected an error, not data'),
      (error: Error) => {
        expect(error.message).toContain(errorMessage);
      }
    );

    const req = httpMock.expectOne('http://localhost:8080/indicators');
    expect(req.request.method).toBe('GET');

    req.flush('Something went wrong', {
      status: 500,
      statusText: 'Internal Server Error'
    });
  });
});
