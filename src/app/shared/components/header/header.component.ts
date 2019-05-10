import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartDataService } from '../../services/shopping-cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartItemsList: any[];
  constructor( private router: Router, private cartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.cartDataService.latestCartItems.subscribe(value => {
      console.log(value);
      this.cartItemsList  = value;
    })
  }

  gotoCartPage(){
    this.router.navigate(['cart']);
  }
}
