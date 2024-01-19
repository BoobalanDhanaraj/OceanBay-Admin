import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BaseUrl = 'https://localhost:7002/api';

  constructor(private http: HttpClient) {}

  adminLogin(data: any): Observable<any> {
    const url = `${this.BaseUrl}/Admin/login`;

    // Make the HTTP POST request with the data in the request body
    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
