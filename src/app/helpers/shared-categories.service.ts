import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedCategoriesService {
  private CategoryAddedSubject = new BehaviorSubject<undefined>(undefined);
  private CategoryListSubject = new BehaviorSubject<any>(null);
  private SubCategoryAddedSubject = new BehaviorSubject<undefined>(undefined);

  categoryAdded$ = this.CategoryAddedSubject.asObservable();
  categoryList$ = this.CategoryListSubject.asObservable();
  subCategoryAdded$ = this.SubCategoryAddedSubject.asObservable();

  notifyCategoryAdded() {
    this.CategoryAddedSubject.next(undefined);
  }

  setCategoryList(list: any) {
    this.CategoryListSubject.next(list);
  }

  notifySubCategoryAdded() {
    this.SubCategoryAddedSubject.next(undefined);
  }
}
