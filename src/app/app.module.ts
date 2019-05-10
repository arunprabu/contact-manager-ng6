import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './shopping/product.module';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SearchComponent } from './shared/components/header/search.component';

import { ColorizrDirective } from './concepts/colorizr.directive';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

//Decorator -- metadata 
// helps the class as Depnedency Injectable
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    ColorizrDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule, // setting up routing module 
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // AppModule should in turn be bootstrapped with a comp -- AppComponent 
})
export class AppModule { }
