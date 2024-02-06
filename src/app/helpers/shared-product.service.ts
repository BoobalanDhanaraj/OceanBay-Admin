import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedProductService {
  private ProductAddedSubject = new BehaviorSubject<undefined>(undefined);
  private ProductDetailSubject = new BehaviorSubject<any | null>(null);
  private EditProductSubject = new BehaviorSubject<any | null>(null);

  ProductAdded$ = this.ProductAddedSubject.asObservable();
  ProductDetail$ = this.ProductDetailSubject.asObservable();
  EditProduct$ = this.EditProductSubject.asObservable();

  notifySellerAdded() {
    this.ProductAddedSubject.next(undefined);
  }

  shareProductDetail(product: any) {
    this.ProductDetailSubject.next(product);
  }

  shareEditProductDetail(product: any) {
    this.EditProductSubject.next(product);
  }
}
