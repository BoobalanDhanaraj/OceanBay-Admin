import { Component } from '@angular/core';
import { SharedCategoriesService } from '../../../helpers/shared-categories.service';
import { CategoriesService } from '../../../services/categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SellerService } from '../../../services/seller.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css',
})
export class AddProductsComponent {
  categories: any;
  sellerDetails: any;
  formValue!: FormGroup;

  constructor(
    private categoryApi: CategoriesService,
    private sharedCategoryApi: SharedCategoriesService,
    private formBuilder: FormBuilder,
    private sellerApi: SellerService
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
    });

    this.sellerApi.getSellersList().subscribe((res) => {
      this.sellerDetails = res.result;
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
