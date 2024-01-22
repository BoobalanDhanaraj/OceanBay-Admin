import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from '../../services/product.service';

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
    private api: ProductService
  ) {}

  ngOnInit(): void {
    this.api.getProductList().subscribe((res) => {
      this.productList = res.result;
    });
  }
}
