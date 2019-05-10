import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConceptsComponent } from './concepts/concepts.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { AboutComponent } from './about/about.component';
import { SdComponent } from './concepts/sd/sd.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { DatabindingComponent } from './concepts/databinding/databinding.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', redirectTo: 'concepts', pathMatch: 'full' },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', children: [
      { path: '', component: ContactsListComponent },
      { path: 'new', component: AddContactComponent },
      { path: ':id', component: ContactDetailsComponent },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  declarations: [
    ConceptsComponent,
    ContactsListComponent,
    AddContactComponent,
    ContactDetailsComponent,
    AboutComponent,
    DatabindingComponent,
    CpbComponent,
    CebComponent,
    SdComponent
  ]
})
export class AppRoutingModule { }
