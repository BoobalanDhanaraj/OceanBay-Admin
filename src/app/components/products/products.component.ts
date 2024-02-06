import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from '../../services/product.service';
import { SharedProductService } from '../../helpers/shared-product.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../helpers/confirmation-dialog/confirmation-dialog.component';

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
    private dialog: MatDialog,
    private productApi: SharedProductService
  ) {}

  ngOnInit(): void {
    this.productApi.ProductAdded$.subscribe(() => {
      this.getProductList();
    });
  }

  onDeleteProduct(sellerId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        //User clicked "Yes," proceed with deletion
        this.api.deleteProduct(sellerId).subscribe(
          (res) => {
            this.getProductList();
          },
          (err) => {
            alert(err);
          }
        );
      }
    });
  }

  private getProductList() {
    this.api.getProductList().subscribe((res) => {
      this.productList = res.result;
    });
  }

  onShareProductDetail(product: any) {
    this.productApi.shareProductDetail(product);
  }

  onEditProductDetail(product: any) {
    this.productApi.shareEditProductDetail(product);
  }
}
