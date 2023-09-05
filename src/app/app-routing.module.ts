import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductsdetailsComponent } from './products/components/productsdetails/productsdetails.component';

const routes: Routes = [
  {path:'products',component:AllProductsComponent},
  {path:'detalis/:id',component:ProductsdetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'**',redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
