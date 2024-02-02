import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from '../../services/product.service';
import { SharedProductService } from '../../helpers/shared-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: any;

  constructor(
    private route: Router,
    private toast: NgToastService,
    private api: ProductService,
    private productApi: SharedProductService
  ) {}

  ngOnInit(): void {
    this.productApi.sellerAdded$.subscribe(() => {
      this.getProductList();
    });
  }

  private getProductList() {
    this.api.getProductList().subscribe((res) => {
      this.productList = res.result;
    });
  }
}
