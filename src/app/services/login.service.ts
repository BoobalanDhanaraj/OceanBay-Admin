import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';
import { DataService } from '../helpers/shared-login-data';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BaseUrl = 'https://localhost:7002/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private dataService: DataService
  ) {}

  adminLogin(data: any): Observable<any> {
    const url = `${this.BaseUrl}/Admin/login`;

    // Make the HTTP POST request with the data in the request body
    return this.http.post(url, data).pipe(
      map((res: any) => {
        if (res.isSuccess) {
          this.authService.setAuthenticationStatus(true);
          this.dataService.setLoginResponse(res);
        }
        return res;
      })
    );
  }
}
