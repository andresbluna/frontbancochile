import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BchileheaderComponent } from './bchileheader.component';

describe('BchileheaderComponent', () => {
  let component: BchileheaderComponent;
  let fixture: ComponentFixture<BchileheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BchileheaderComponent]  // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(BchileheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
