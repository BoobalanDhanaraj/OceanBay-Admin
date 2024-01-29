import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  allCategories: any;

  constructor(private api: CategoriesService) {}

  ngOnInit(): void {
    this.onCategoriesList();
  }

  private onCategoriesList() {
    this.api.getAllCategoriesList().subscribe((res) => {
      this.allCategories = res.result;
      console.log(res.result);
    });
  }
}
