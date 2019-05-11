import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/shared/services/shopping-cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit, OnDestroy {

  existingCartItems: any[];
  cartSubscription: Subscription;  // RXJS subscription

  constructor( private cartService: ShoppingCartDataService) { }

  ngOnInit() {
    this.cartSubscription = this.cartService.latestCartItems.subscribe(pdt => {
      console.log(pdt);
      this.existingCartItems = pdt;
    })
  }

  removeCartItem(pdt){
    this.cartService.removePdtFromObservableArray(pdt);
  }

  //Lifecycle hook -- called automatically when we navigate away from component
  ngOnDestroy(){
    console.log("Should destroy ");
    // empty the arrray 
    // empty obj 
    // unsubscribe 
    this.cartSubscription.unsubscribe();
  }
}
