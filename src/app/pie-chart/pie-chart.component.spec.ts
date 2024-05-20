import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieChartComponent } from './pie-chart.component';
import { DataService } from '../ufservice.service';
import { of } from 'rxjs';
import { UfData } from '../interface/interfaceuf';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj('DataService', ['getUfData']);
    mockDataService.getUfData.and.returnValue(of({
      serie: [
        { fecha: '2024-05-01', valor: 37500 },
        { fecha: '2024-05-02', valor: 37600 },
        { fecha: '2024-05-03', valor: 37700 }
      ]
    } as UfData));

    await TestBed.configureTestingModule({
      declarations: [PieChartComponent],
      providers: [
        { provide: DataService, useValue: mockDataService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUfData on ngAfterViewInit', () => {
    spyOn(component, 'createChart');
    component.ngAfterViewInit();
    expect(mockDataService.getUfData).toHaveBeenCalled();
    expect(component.createChart).toHaveBeenCalledTimes(1);
  });

  it('should create charts with correct data', () => {
    const chartSpy = spyOn(component, 'createChart').and.callThrough();
    component.ngAfterViewInit();
    fixture.detectChanges();

    const expectedLabels = ['5/1/2024', '5/2/2024', '5/3/2024'];
    const expectedValues = [37500, 37600, 37700];

    expect(chartSpy).toHaveBeenCalledWith('MyChart1', expectedLabels, expectedValues);
    expect(chartSpy).toHaveBeenCalledWith('MyChart2', expectedLabels, expectedValues);
  });
});
