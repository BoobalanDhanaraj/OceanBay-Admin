import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BaseUrl = 'https://localhost:7122/api';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    const url = `${this.BaseUrl}/Product/ProductList`;

    return this.http.get<any>(url);
  }

  postProductList(data: any): Observable<any> {
    const url = `${this.BaseUrl}/Product/AddProduct`;

    return this.http.post(url, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.BaseUrl}/Product/DeleteProduct?productId=${id}`;

    return this.http.delete(url);
  }

  postProductImage(id: number, imageUrls: string): Observable<any> {
    const url = `${this.BaseUrl}/productimages/AddImage?productId=${id}`;

    return this.http.post(url, imageUrls).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
