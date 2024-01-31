import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { SharedCategoriesService } from '../../../helpers/shared-categories.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrl: './add-sub-category.component.css',
})
export class AddSubCategoryComponent {
  formValue!: FormGroup;
  allCategories: any;

  constructor(
    private api: CategoriesService,
    private formBuilder: FormBuilder,
    private sharedApi: SharedCategoriesService
  ) {}

  ngOnInit(): void {
    this.sharedApi.categoryList$.subscribe((response) => {
      this.allCategories = response;
      console.log('cate', this.allCategories);
    });
    this.formValue = this.formBuilder.group({
      categoryId: [''],
      Name: [''],
    });
  }

  onAddNewSubCategory() {
    const SubCategoryData = {
      subCategoryName: this.formValue.value.Name,
      categoryID: this.formValue.value.categoryId,
    };

    this.api.postNewSubCategory(SubCategoryData).subscribe(
      (res) => {
        console.log(res);
        this.sharedApi.notifySubCategoryAdded();
        this.formValue.reset();
      },
      (err) => {
        alert(err);
      }
    );
  }
}
