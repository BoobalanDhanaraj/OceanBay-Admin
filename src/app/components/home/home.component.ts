import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productList: any;

  constructor(private api: HomeService) {}

  ngOnInit(): void {
    this.api.getProductList().subscribe((res) => {
      this.productList = res.result;
    });
  }
}
