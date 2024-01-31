import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private BaseUrl = 'https://localhost:7122/api';

  constructor(private http: HttpClient) {}

  getAllCategoriesList(): Observable<any> {
    const url = `${this.BaseUrl}/categories/AllCategories`;

    return this.http.get<any>(url);
  }

  postNewCategory(data: any): Observable<any> {
    const url = `${this.BaseUrl}/categories/AddCategory`;

    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postNewSubCategory(data: any): Observable<any> {
    const url = `${this.BaseUrl}/subcategories/AddSubcategory`;

    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
