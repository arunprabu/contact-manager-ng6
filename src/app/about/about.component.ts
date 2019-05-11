import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  chipsList: string[];

  rangeValues: number[] = [20,80];

  //for security in angular -- read more here https://angular.io/guide/security
  dangerousUrl: string; 
  trustedUrl: any;

  constructor(private sanitizer: DomSanitizer) { 
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  
  }

  ngOnInit() {
  }

  onBtnClickHandler(){
    console.log(this.chipsList);
    console.log(this.rangeValues);
  }

}
