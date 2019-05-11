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

  birthday = new Date(1988, 3, 15); // April 15, 1988
  loremIpsum: string ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam harum facere omnis aspernatur recusandae nam consectetur laboriosam ab non expedita cum saepe obcaecati, officia laborum iusto facilis ullam fugit eaque!"

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
