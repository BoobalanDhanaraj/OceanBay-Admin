import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { NgToastService } from 'ng-angular-popup';
import { SharedCategoriesService } from '../../helpers/shared-categories.service';
import { ConfirmationDialogComponent } from '../../helpers/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    private sharedApi: SharedCategoriesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sharedApi.categoryAdded$.subscribe(() => {
      this.sharedApi.subCategoryAdded$.subscribe(() => {
        this.onCategoriesList();
      });
    });
  }

  onDeleteCategory(categoryId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        //User clicked "Yes," proceed with deletion
        this.api.deleteCategory(categoryId).subscribe(
          (res) => {
            // Remove the deleted job from the jobStatus array
            this.onCategoriesList();
            this.toast.success({
              detail: 'LOGIN SUCCESS!',
              summary: 'Category removed succesfully',
              duration: 5000,
              position: 'topRight',
            });
          },
          (err) => {
            alert(err);
          }
        );
      }
    });
  }

  onDeleteSubCategory(subCategoryId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        //User clicked "Yes," proceed with deletion
        this.api.deleteSubCategory(subCategoryId).subscribe(
          (res) => {
            // Remove the deleted job from the jobStatus array
            this.onCategoriesList();
            this.toast.success({
              detail: 'LOGIN SUCCESS!',
              summary: 'Category removed succesfully',
              duration: 5000,
              position: 'topRight',
            });
          },
          (err) => {
            alert(err);
          }
        );
      }
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
