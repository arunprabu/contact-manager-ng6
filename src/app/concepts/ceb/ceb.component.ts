import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  //create an event using eventemitter -- specify the type of data we are sending to parent -- string 
  @Output() dataLoaded = new EventEmitter<string>();
  myCompany: string = "ITC";

  constructor() { }

  ngOnInit() {
    
  }

  loadData(){
    setTimeout( () => {
      this.dataLoaded.emit("Arun");
    }, 2000);
  }

}
