import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { SearchComponent } from './shared/header/search.component';
import { ColorizrDirective } from './directives/colorizr.directive';

//Decorator -- metadata 
// helps the class as Depnedency Injectable
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ColorizrDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // setting up routing module 
  ],
  providers: [],
  bootstrap: [AppComponent]   // AppModule should in turn be bootstrapped with a comp -- AppComponent 
})
export class AppModule { }
