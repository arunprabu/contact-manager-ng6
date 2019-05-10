import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/shared/services/shopping-cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  existingCartItems: any[];

  constructor( private cartService: ShoppingCartDataService) { }

  ngOnInit() {
    this.cartService.latestCartItems.subscribe(pdt => {
      console.log(pdt);
      this.existingCartItems = pdt;
    })
  }

  removeCartItem(pdt){
    this.cartService.removePdtFromObservableArray(pdt);
  }
}
