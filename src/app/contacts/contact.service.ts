import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IContact } from './icontact';


//Decorator
//injectable decorator make the class  dep injectable 
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  CONTACT_API: string = "https://jsonplaceholder.typicode.com/users";

  constructor( private http: HttpClient) { }

  //create contact 
  createContact(contactData: IContact ): Observable<IContact> { // 1. get the data from comp.ts 
    console.log(contactData);
    //2. send data to rest api 
    // 2.1 identify the api first  -- https://jsonplaceholder.typicode.com/users
    // 2.2 create a post req with our data and send it to the above api end point 
   return this.http.post(this.CONTACT_API, contactData)
                  .pipe(map( (resp: IContact )=>{ //3. get the resp from rest api 
                    console.log( resp);
                    return resp; //4. send it back to the comp.ts 
                  }));
  }


  //list all contacts 
  getContacts(): Observable<IContact[]>  {
    return this.http.get(this.CONTACT_API)
                  .pipe(map( (resp: IContact[]) =>{ 
                    console.log( resp);
                    return resp;
                  }));
  }

  //get one contact 
  getContactById(id: string): Observable<IContact> {
    let _url: string = `${this.CONTACT_API}/${id}`;
    return this.http.get(_url)
                  .pipe(map( (resp: IContact )=>{ 
                    console.log( resp);
                    return resp;
                  }));
  }

  //update contact 
  updateContact( contactData: IContact): Observable<IContact> {
    let _url: string = `${this.CONTACT_API}/${contactData.id}`;
    return this.http.put(_url, contactData)
                  .pipe(map( (resp: IContact )=>{ 
                    console.log( resp);
                    return resp;
                  }));
  }

  //delete contacts 


}
