import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  formValue!: FormGroup;

  constructor(
    private api: LoginService,
    private formBuilder: FormBuilder,
    private route: Router
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

    this.api.adminLogin(loginData).subscribe((res) => {
      console.log('Login successful', res);
      this.route.navigate(['/home']);
    });
  }
}
