import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  setAuthenticationStatus(status: boolean): void {
    this.isAuthenticated = status;
  }

  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }
}
