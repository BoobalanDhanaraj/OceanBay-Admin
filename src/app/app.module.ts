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
import { CustomerComponent } from './components/customer/customer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoriesComponent } from './components/categories/add-categories/add-categories.component';
import { AddSubCategoryComponent } from './components/categories/add-sub-category/add-sub-category.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddProductImageComponent } from './components/products/add-products/add-product-image/add-product-image.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

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
    CustomerComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    AddSubCategoryComponent,
    AddProductImageComponent,
    EditProductComponent,
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
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
