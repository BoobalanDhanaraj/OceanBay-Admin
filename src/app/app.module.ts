import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgToastModule } from 'ng-angular-popup';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductService } from './services/product.service';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { SellerComponent } from './components/seller/seller.component';
import { SellerService } from './services/seller.service';
import { AddSellerComponent } from './components/seller/add-seller/add-seller.component';
import { ConfirmationDialogComponent } from './helpers/confirmation-dialog/confirmation-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    AddProductsComponent,
    SellerComponent,
    AddSellerComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration(),
    LoginService,
    ProductService,
    NgToastModule,
    SellerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
