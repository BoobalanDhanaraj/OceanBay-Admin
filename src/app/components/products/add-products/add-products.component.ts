import { Component } from '@angular/core';
import { SharedCategoriesService } from '../../../helpers/shared-categories.service';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css',
})
export class AddProductsComponent {
  categories: any;

  constructor(
    private categoryApi: CategoriesService,
    private sharedCategoryApi: SharedCategoriesService
  ) {}

  ngOnInit(): void {
    this.categoryApi.getAllCategoriesList().subscribe((res) => {
      this.categories = res.result;
      console.log(this.categories);
    });

    this.sharedCategoryApi.categoryList$.subscribe((response) => {
      this.categories = response;
    });
  }
}
