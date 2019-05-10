import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SearchComponent } from './shared/components/header/search.component';
import { ColorizrDirective } from './concepts/colorizr.directive';

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
