// error.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div>
      <img src="src/assets/error_img.webp" alt="Error">
      <p>{{ message }}</p>
    </div>
  `,
  standalone: true,
})
export class ErrorComponent {
  @Input() message: string;
}
