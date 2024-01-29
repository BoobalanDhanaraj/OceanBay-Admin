import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

  postNewSeller(data: any): Observable<any> {
    const url = `${this.BaseUrl}/seller/AddSeller`;

    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteSeller(id: number): Observable<any> {
    const url = `${this.BaseUrl}/seller/DeleteSeller?id=${id}`;

    return this.http.delete(url);
  }
}
