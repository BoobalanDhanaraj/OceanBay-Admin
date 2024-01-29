import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../helpers/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css',
})
export class SellerComponent {
  formValue!: FormGroup;
  sellerDetails: any;

  constructor(private api: SellerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getSellerDetails();
  }

  onDeleteSeller(sellerId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        //User clicked "Yes," proceed with deletion
        this.api.deleteSeller(sellerId).subscribe(
          (res) => {
            // Remove the deleted job from the jobStatus array
            this.getSellerDetails();
            console.log(res);
          },
          (err) => {
            alert(err);
          }
        );
      }
    });
  }

  private getSellerDetails() {
    this.api.getSellersList().subscribe((res) => {
      this.sellerDetails = res.result;
    });
  }
}
