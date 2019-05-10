import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  dataLoadedFor: string;

  @ViewChild(CebComponent) cebData: any; 
  //ToDO: @ViewChildren()
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.cebData);
  }
  
  getRealAge(){
    return 65;
  }

  onDataLoadedHandler(e){
    console.log(e);
    this.dataLoadedFor = e; 
  }
}
