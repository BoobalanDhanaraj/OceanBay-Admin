import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedProductService {
  private ProductAddedSubject = new BehaviorSubject<undefined>(undefined);

  sellerAdded$ = this.ProductAddedSubject.asObservable();

  notifySellerAdded() {
    this.ProductAddedSubject.next(undefined);
  }
}
