import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;
  adminEmail!: string;
  errorMessage!: string;

  constructor(
    private api: LoginService,
    private formBuilder: FormBuilder,
    private route: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onAdminLogin() {
    const loginData = {
      email: this.formValue.value.email,
      password: this.formValue.value.password,
    };

    this.api.adminLogin(loginData).subscribe(
      (res) => {
        this.adminEmail = res.result.email;
        if (res.isSuccess) {
          this.toast.success({
            detail: 'LOGIN SUCCESS!',
            summary: `authenticated as ${this.adminEmail}`,
            duration: 5000,
            position: 'topRight',
          });
          this.route.navigate(['/home']);
        } else if (res.isSuccess == false) {
          this.toast.error({
            detail: 'ERROR!!',
            summary: 'Your Error Message',
            sticky: true,
            position: 'topRight',
          });
          this.errorMessage = res.message;
        }
      },
      (error) => {
        this.errorMessage = error.message;
        this.toast.error({
          detail: 'ERROR!!',
          summary: 'Login Failed',
          sticky: true,
          position: 'topRight',
        });
      }
    );
  }
}
