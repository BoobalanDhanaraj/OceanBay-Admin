import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedProductService {
  private ProductAddedSubject = new BehaviorSubject<undefined>(undefined);
  private ProductDetailSubject = new BehaviorSubject<undefined>(undefined);

  ProductAdded$ = this.ProductAddedSubject.asObservable();
  ProductDetail$ = this.ProductDetailSubject.asObservable();

  notifySellerAdded() {
    this.ProductAddedSubject.next(undefined);
  }

  shareProductDetail(product: any) {
    this.ProductDetailSubject.next(product);
  }
}
