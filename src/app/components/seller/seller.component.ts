import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css',
})
export class SellerComponent {
  sellerDetails: any;

  constructor(private api: SellerService) {}

  ngOnInit(): void {
    this.api.getSellersList().subscribe((res) => {
      this.sellerDetails = res;
      console.log(this.sellerDetails);
    });
  }
}
