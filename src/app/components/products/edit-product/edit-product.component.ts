import { Component } from '@angular/core';
import { SharedProductService } from '../../../helpers/shared-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  productDetail: any;

  constructor(private productApi: SharedProductService) {}

  ngOnInit(): void {
    this.productApi.EditProduct$.subscribe((product) => {
      this.productDetail = product;
      console.log(this.productDetail);
    });
  }
}
