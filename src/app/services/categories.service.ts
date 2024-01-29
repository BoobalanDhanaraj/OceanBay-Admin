import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
