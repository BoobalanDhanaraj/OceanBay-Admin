import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { NgToastService } from 'ng-angular-popup';
import { SharedCategoriesService } from '../../helpers/shared-categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  allCategories: any;

  constructor(
    private api: CategoriesService,
    private toast: NgToastService,
    private sharedApi: SharedCategoriesService
  ) {}

  ngOnInit(): void {
    this.sharedApi.categoryAdded$.subscribe(() => {
      this.sharedApi.subCategoryAdded$.subscribe(() => {
        this.onCategoriesList();
      });
    });
  }

  private onCategoriesList() {
    this.api.getAllCategoriesList().subscribe((res) => {
      this.allCategories = res.result;
      this.sharedApi.setCategoryList(this.allCategories);
      console.log(res.result);
    });
  }
}
