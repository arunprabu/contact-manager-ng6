import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/contacts/contact.service';
import { IContact } from '../IContact';

declare var $: any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: IContact;
  duplicateContactData: IContact;
  isUpdated: boolean;

  constructor( private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    //read url parameters in angular 4,5,6,7
    let _id = this.activatedRoute.snapshot.paramMap.get('id');
    this.contactService.getContactById(_id)
                    .subscribe( (resp: IContact) => {
                      console.log(resp);
                      this.contactData = resp;
                    });
  }

  openEditModal() {
    //duplicate 
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
    console.log(this.duplicateContactData);
    //open the modal with JS 
    $('#editContactModal').modal('show');
  }

  saveContactHandler(){
    console.log(this.duplicateContactData);
    this.contactService.updateContact(this.duplicateContactData)
                  .subscribe( (resp: IContact) => {
                    console.log(resp);
                    
                    this.isUpdated = true;
                    setTimeout(()=>{
                      $('#editContactModal').modal('hide');
                      this.contactData = resp;
                      this.isUpdated = false;
                    }, 3000);
                    
                  });

  }

}
