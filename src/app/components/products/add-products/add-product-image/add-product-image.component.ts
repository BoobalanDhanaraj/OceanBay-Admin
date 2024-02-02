import { Component } from '@angular/core';
import { SharedProductService } from '../../../../helpers/shared-product.service';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrl: './add-product-image.component.css',
})
export class AddProductImageComponent {
  productDetail: any;

  constructor(productApi: SharedProductService) {}

  ngOnInit(): void {}
}
