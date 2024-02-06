import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from '../../helpers/shared-login-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  productList: any;
  adminDetails: any;

  constructor(
    private authService: AuthService,
    private route: Router,
    private toast: NgToastService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.data.loginResponse$.subscribe((response) => {
      this.adminDetails = response;
    });
  }

  onAdminLogout() {
    this.authService.setAuthenticationStatus(false);
    this.route.navigate(['/login']);
    this.toast.success({
      detail: 'Sucessfully Logged out!',
      summary: 'Enter the credentials to Login again',
      duration: 5000,
      position: 'topRight',
    });
  }
}
