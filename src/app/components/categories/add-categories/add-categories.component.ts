import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { SharedCategoriesService } from '../../../helpers/shared-categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrl: './add-categories.component.css',
})
export class AddCategoriesComponent {
  formValue!: FormGroup;

  constructor(
    private api: CategoriesService,
    private formBuilder: FormBuilder,
    private sharedApi: SharedCategoriesService
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Name: [''],
    });
  }

  onAddNewCategory() {
    const CategoryData = {
      categoryName: this.formValue.value.Name,
    };

    this.api.postNewCategory(CategoryData).subscribe(
      (res) => {
        this.sharedApi.notifyCategoryAdded();
        this.formValue.reset();
      },
      (err) => {
        alert(err);
      }
    );
  }
}
