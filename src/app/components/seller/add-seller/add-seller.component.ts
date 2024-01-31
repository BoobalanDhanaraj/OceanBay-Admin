import { Component } from '@angular/core';
import { SellerService } from '../../../services/seller.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SharedSellerService } from '../../../helpers/shared-seller';

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
    private sharedSellerService: SharedSellerService
  ) {}

  ngOnInit(): void {
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
        this.sharedSellerService.notifySellerAdded();
        this.formValue.reset();
      },
      (err) => {
        alert(err);
      }
    );
  }
}
