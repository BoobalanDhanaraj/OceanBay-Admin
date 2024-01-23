import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css',
})
export class SellerComponent {
  formValue!: FormGroup;
  sellerDetails: any;

  constructor(private api: SellerService, private formBuilder: FormBuilder) {}

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

    this.api.postNewSeller(sellerData).subscribe((res) => {
      console.log(res);
      this.InitiatePage();
      this.formValue.reset();
    });
  }

  private InitiatePage() {
    this.api.getSellersList().subscribe((res) => {
      this.sellerDetails = res;
      console.log(this.sellerDetails);
    });
  }
}
