import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  values1: string[];

  rangeValues: number[] = [20,80];

  constructor() { }

  ngOnInit() {
  }

}
