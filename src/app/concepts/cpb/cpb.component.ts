import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  //@Input() decorator makes the var myAge as custom property to the app-cpb selector 
  @Input() myAge: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
