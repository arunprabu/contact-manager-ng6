import { Injectable } from "@angular/core";

export interface IProduct{
  id: number;
  name: string;    
  category: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class Product implements IProduct{
  id: number;
  name: string;    
  category: string;
  price: string;

  constructor(){

  }

  getProductList() {
    return [{
      "id": 1,
      "name": "Skewers - Bamboo",
      "category": "Automotive",
      "price": "$2.76"
    }, {
      "id": 2,
      "name": "Cheese - Parmigiano Reggiano",
      "category": "Games",
      "price": "$6.38"
    }, {
      "id": 3,
      "name": "Wine - Black Tower Qr",
      "category": "Garden",
      "price": "$4.85"
    }, {
      "id": 4,
      "name": "Chicken - Thigh, Bone In",
      "category": "Toys",
      "price": "$5.01"
    }, {
      "id": 5,
      "name": "Table Cloth 90x90 Colour",
      "category": "Sports",
      "price": "$6.13"
    }, {
      "id": 6,
      "name": "Cranberries - Frozen",
      "category": "Baby",
      "price": "$7.08"
    }, {
      "id": 7,
      "name": "Sambuca - Opal Nera",
      "category": "Outdoors",
      "price": "$6.89"
    }, {
      "id": 8,
      "name": "Wine - Bouchard La Vignee Pinot",
      "category": "Games",
      "price": "$9.48"
    }, {
      "id": 9,
      "name": "Pepper - Red Chili",
      "category": "Books",
      "price": "$5.51"
    }, {
      "id": 10,
      "name": "Potatoes - Purple, Organic",
      "category": "Computers",
      "price": "$9.63"
    }];
  }
  //write util methods here
  
}