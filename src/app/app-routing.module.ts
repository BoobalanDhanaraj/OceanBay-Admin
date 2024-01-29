import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
//import { AuthGuard } from './services/auth.guard';
import { ProductsComponent } from './components/products/products.component';
import { SellerComponent } from './components/seller/seller.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, //canActivate: [AuthGuard] },
  { path: 'all-products', component: ProductsComponent }, //canActivate: [AuthGuard] },
  { path: 'sellers', component: SellerComponent }, //canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
