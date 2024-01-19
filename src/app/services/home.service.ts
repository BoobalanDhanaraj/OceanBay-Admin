import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private BaseUrl = 'https://localhost:7122/api';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    const url = `${this.BaseUrl}/Product/ProductList`;

    return this.http.get<any>(url);
  }
}
