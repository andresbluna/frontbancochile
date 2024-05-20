import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosFinancierosService {
  private apiUrl = 'http://localhost:8080/indicators';

  constructor(private http: HttpClient) {}

  obtenerDatosFinancieros(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const errorImageUrl = 'src/assets/error_img.webp';
    return throwError(() => new Error(errorImageUrl));
  }
}
