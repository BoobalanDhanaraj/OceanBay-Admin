import { Component } from '@angular/core';
import { SharedProductService } from '../../../helpers/shared-product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  formValue!: FormGroup;

  constructor(
    private productApi: SharedProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      imageUrl: [''],
    });
    this.productApi.EditProduct$.subscribe((product) => {
      console.log(product);
      this.editProducts(product);
    });
  }

  private editProducts(product: any) {
    this.formValue.controls['name'].setValue(product?.name);
    this.formValue.controls['imageUrl'].setValue(product?.productImages[0]);
  }
}
