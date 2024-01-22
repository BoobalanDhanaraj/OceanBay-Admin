import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
