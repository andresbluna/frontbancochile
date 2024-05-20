import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosFinancierosComponent } from './datosfinancieros.component';
import { DatosFinancierosService } from '../datosfinancieros.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

describe('DatosFinancierosComponent', () => {
  let component: DatosFinancierosComponent;
  let fixture: ComponentFixture<DatosFinancierosComponent>;
  let mockDatosFinancierosService: jasmine.SpyObj<DatosFinancierosService>;

  beforeEach(async () => {
    mockDatosFinancierosService = jasmine.createSpyObj('DatosFinancierosService', ['obtenerDatosFinancieros']);
    mockDatosFinancierosService.obtenerDatosFinancieros.and.returnValue(of({
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
    }));

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        PieChartComponent  // Assuming PieChartComponent is standalone
      ],
      declarations: [DatosFinancierosComponent],  // Ensure this component is not standalone
      providers: [
        { provide: DatosFinancierosService, useValue: mockDatosFinancierosService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch financial data on init', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.datos).toEqual(jasmine.objectContaining({
      uf: jasmine.objectContaining({ nombre: 'UF', fecha: '2024-05-20', valor: 30000 }),
      euro: jasmine.objectContaining({ nombre: 'Euro', fecha: '2024-05-20', valor: 900 })
    }));
  });
});
