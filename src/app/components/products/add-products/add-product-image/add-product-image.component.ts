import { Component } from '@angular/core';
import { SharedProductService } from '../../../../helpers/shared-product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrl: './add-product-image.component.css',
})
export class AddProductImageComponent {
  productDetail: any;
  formValue!: FormGroup;
  ImageUrls!: any;

  constructor(
    private productApi: SharedProductService,
    private formBuilder: FormBuilder,
    private api: ProductService
  ) {}

  ngOnInit(): void {
    this.productApi.ProductDetail$.subscribe((product) => {
      this.productDetail = product;
      console.log(this.productDetail);
    });

    this.formValue = this.formBuilder.group({
      ImageUrl: [''],
    });
  }

  onAddProductImage() {
    const productId = this.productDetail.productID;
    //this.ImageUrls = this.formValue.value.ImageUrl;

    this.api
      .postProductImage(productId, this.formValue.value.ImageUrl)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
