import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShoppingCartDataService } from 'src/app/shared/services/shopping-cart-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  productList: any[];

  constructor( private product: Product, private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.productList = this.product.getProductList();
    console.log(this.productList);
  }
  
  addToCartHandler(pdt){
    this.shoppingCartDataService.updateCart(pdt);
  }
}
