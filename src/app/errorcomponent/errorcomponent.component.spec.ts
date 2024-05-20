import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from "./errorcomponent.component";
import { By } from '@angular/platform-browser';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorComponent]  // Correct for standalone components
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the error message', () => {
    const testMessage = 'This is a test error message';
    component.message = testMessage;
    fixture.detectChanges();

    const messageElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(messageElement.textContent).toContain(testMessage);
  });

  it('should display the error image', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain('src/assets/error_img.webp');
    expect(imgElement.alt).toBe('Error');
  });
});
