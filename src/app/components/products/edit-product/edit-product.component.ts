import { Component } from '@angular/core';
import { SharedProductService } from '../../../helpers/shared-product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  productDetail: any;
  formValue!: FormGroup;

  constructor(
    private productApi: SharedProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productApi.EditProduct$.subscribe((product) => {
      this.productDetail = product;
      console.log(this.productDetail);
    });
  }
}
