import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IContact } from '../IContact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {
  //step 1
  contactForm: FormGroup;
  savedStatus: string; 

  constructor( private contactService: ContactService ) { // 1. connect to service 
  }

  ngOnInit() {
    this.contactForm = new FormGroup( {
      name: new FormControl( '', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [ 
        Validators.required,
        Validators.email
      ])
    });
  }

  onAddContactHandler(): void{
    console.log(this.contactForm);
    console.log(this.contactForm.value);

    // 2. send the data to service's method 
    this.contactService.createContact(this.contactForm.value)
                      .subscribe( (resp: IContact )=> { // 3. receive the resp from service
                        console.log(resp);
                        // 4. make it appear in html 
                        if(resp && resp.id ){
                          this.savedStatus = 'Thanks for Creating a contact!';
                        }
                      });

     
    
  }

}
