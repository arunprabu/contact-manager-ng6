import { Component, OnInit } from '@angular/core';
import { IContact } from '../IContact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styles: []
})
export class ContactsListComponent implements OnInit {

  contactList: IContact[];
  constructor( private contactService: ContactService) {
    console.log("Inside Constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    //send a req to service 
    this.contactService.getContacts()
              .subscribe( (resp: IContact[]) => {
                console.log(resp);
                this.contactList = resp;
              });
  }

}
