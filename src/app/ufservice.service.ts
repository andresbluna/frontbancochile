import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/uf';

  constructor(private http: HttpClient) { }

  getUfData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

export class UfserviceService {
}
