import { Component } from '@angular/core';

//Decorator 
@Component({
  selector: 'app-root', //exposed as selector
  templateUrl: './app.component.html',  // html - must - only one should be there 
  styleUrls: ['./app.component.css'] //css
})
export class AppComponent {
  //ts 
  appName: string = "Contact Manager App";




}

