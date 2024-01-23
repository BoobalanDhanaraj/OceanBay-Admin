import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  private BaseUrl = 'https://localhost:7122/api';

  constructor(private http: HttpClient) {}

  getSellersList(): Observable<any> {
    const url = `${this.BaseUrl}/seller/GetSeller`;

    return this.http.get<any>(url);
  }
}
