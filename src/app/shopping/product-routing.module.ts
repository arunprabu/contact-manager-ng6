import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const PRODUCT_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: 'products', component: ProductListComponent },
  { path: 'products/cart', component: CartComponent },
  { path: 'products/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES)
  ],
  exports: [RouterModule],
  declarations: [
  ]
})
export class ProductRoutingModule { }
