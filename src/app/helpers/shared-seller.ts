import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedSellerService {
  private sellerAddedSubject = new BehaviorSubject<undefined>(undefined);

  sellerAdded$ = this.sellerAddedSubject.asObservable();

  notifySellerAdded() {
    this.sellerAddedSubject.next(undefined);
  }
}
