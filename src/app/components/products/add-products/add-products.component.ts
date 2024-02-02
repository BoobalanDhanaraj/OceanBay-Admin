import { Component } from '@angular/core';
import { SharedCategoriesService } from '../../../helpers/shared-categories.service';
import { CategoriesService } from '../../../services/categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css',
})
export class AddProductsComponent {
  categories: any;
  formValue!: FormGroup;

  constructor(
    private categoryApi: CategoriesService,
    private sharedCategoryApi: SharedCategoriesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      productImageUrl: [''],
      price: [''],
      stockQuantity: [''],
      categoryId: [''],
      subcategoryId: [''],
      sellerId: [''],
    });

    this.categoryApi.getAllCategoriesList().subscribe((res) => {
      this.categories = res.result;
      console.log(this.categories);
    });

    this.sharedCategoryApi.categoryList$.subscribe((response) => {
      this.categories = response;
    });
  }

  updateSubcategories() {
    const categoryId = this.formValue.get('categoryId')?.value;

    const selectedCategory = this.categories.find(
      (category: any) => category.categoryID == categoryId
    );

    if (selectedCategory) {
      this.formValue
        .get('subcategoryId')
        ?.patchValue(selectedCategory.subcategories);
    } else {
      this.formValue.get('subcategoryId')?.setValue(null);
    }
  }
}
