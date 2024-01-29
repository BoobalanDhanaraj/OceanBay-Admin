import { Component } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrl: './add-seller.component.css',
})
export class AddSellerComponent {
  formValue!: FormGroup;
  sellerDetails: any;

  constructor(
    private api: SellerService,
    private formBuilder: FormBuilder,
    private toast: NgToastService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.InitiatePage();
    this.formValue = this.formBuilder.group({
      Name: [''],
      Email: [''],
      PhoneNumber: [''],
    });
  }

  onAddNewSeller() {
    const sellerData = {
      SellerName: this.formValue.value.Name,
      Email: this.formValue.value.Email,
      PhoneNumber: this.formValue.value.PhoneNumber,
    };

    this.api.postNewSeller(sellerData).subscribe(
      (res) => {
        console.log(res);
        this.toast.success({
          detail: 'SUCCESS!!',
          summary: `${res.message}`,
          duration: 5000,
          position: 'topRight',
        });
        this.route.navigate(['/sellers']);
        this.formValue.reset();
      },
      (err) => {
        this.toast.error({
          detail: 'ERROR!!',
          summary: 'Failed to Add',
          sticky: true,
          position: 'topRight',
        });
      }
    );
  }

  private InitiatePage() {
    this.api.getSellersList().subscribe((res) => {
      this.sellerDetails = res.result;
    });
  }
}
