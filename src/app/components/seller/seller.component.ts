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

  constructor(private api: SellerService) {}

  ngOnInit(): void {}
}
