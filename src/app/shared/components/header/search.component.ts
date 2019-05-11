import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
  <form class="form-inline my-2 my-lg-0" >
    <input class="form-control mr-sm-2" type="text" placeholder="Search" 
    aria-label="Search" #searchInput>  <!-- refs -->
    
    <button class="btn btn-secondary my-2 my-sm-0" type="button" 
      (click)="searchBtnClick(searchInput.value)">Search</button>
  </form>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchBtnClick(value){
    console.log(value);
  }

}
