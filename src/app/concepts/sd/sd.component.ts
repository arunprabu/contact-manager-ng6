import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
  templateUrl: './sd.component.html',
  styles: []
})
export class SdComponent implements OnInit {

  isLoggedIn: boolean = true;
  skillsList: any = [
    'html', 'css', 'java', 'maven'
  ]
  constructor() { }

  ngOnInit() {
  }

}
