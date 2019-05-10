import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [
    `
      .red{
        color: red;
      }

      .bold{
        font-weight: bold;
      }
    `
  ]
})
export class DatabindingComponent implements OnInit {

  //String Interpolation
  appName: string = "Contact Manager";
  isLoggedIn: boolean = false;
  myExp: number = 13;

  skillsList: Array<string> = [
    'html', 'nodejs', 'react', 'ng'
  ]


  //two way binding
  company: string = "ITC";


  constructor() { }

  ngOnInit() {
  }

  getMyExp(): number {
    return this.myExp;
  }

  // for prop binding
  isAuthenticated(): boolean{
    return this.isLoggedIn;
  }

  //event binding
  onBtnClickHandler(){
    alert("clicked");
  }

  
}
