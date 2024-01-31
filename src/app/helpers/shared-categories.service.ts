import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedCategoriesService {
  private CategoryAddedSubject = new BehaviorSubject<undefined>(undefined);

  categoryAdded$ = this.CategoryAddedSubject.asObservable();

  notifyCategoryAdded() {
    this.CategoryAddedSubject.next(undefined);
  }
}
