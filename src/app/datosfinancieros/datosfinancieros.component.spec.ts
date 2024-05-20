import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFinancierosComponent} from "./datosfinancieros.component";

describe('DatosFinancierosComponent', () => {
  let component: DatosFinancierosComponent;
  let fixture: ComponentFixture<DatosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosFinancierosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
