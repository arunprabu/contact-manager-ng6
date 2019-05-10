import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartDataService {

  //should load this one from db via services -- now mocking it with static data
  currentCartItem: any[] = [
    {
      "id": 2,
      "name": "Cheese",
      "category": "Dairy",
      "price": "$6.38"
    }
  ];

  //Step 1: Create BehaviourSubject with default value for subscribing first
  private cartItemsList = new BehaviorSubject<any[]>(this.currentCartItem);
  
  //Step 2: Create Observable for the BehaviourSubject.. so any component can subscribe to it.
  latestCartItems: Observable<any> = this.cartItemsList.asObservable(); // latestCartItems is subscribabale

  constructor() {
    
  }

  updateCart(newProduct: any ){
    console.log(newProduct);
    this.addPdtToObservableArray(newProduct);
  }

  addPdtToObservableArray(item) {
    this.latestCartItems.pipe(take(1)).subscribe(val => {
      console.log(val)
      const newArr = [...val, item];
      this.cartItemsList.next(newArr);
    })
  }

  removePdtFromObservableArray(idx) {
    this.latestCartItems.pipe(take(1)).subscribe(val => {
      const arr = this.cartItemsList.getValue()
      console.log(arr, idx);
      arr.splice(idx, 1)
      this.cartItemsList.next(arr);
    })
  }
}
