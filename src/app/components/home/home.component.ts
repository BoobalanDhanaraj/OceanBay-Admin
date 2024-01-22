import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productList: any;

  constructor(
    private api: HomeService,
    private authService: AuthService,
    private route: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.api.getProductList().subscribe((res) => {
      this.productList = res.result;
    });
  }

  onAdminLogout() {
    this.authService.setAuthenticationStatus(false);
    this.route.navigate(['/login']);
  }
}
