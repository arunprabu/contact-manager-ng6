import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';

import { ProductRoutingModule } from './product-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent
  ]
})
export class ProductModule { }
