import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';

import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsdetailsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
    ]
})
export class ProductsModule { }
