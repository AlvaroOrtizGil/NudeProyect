import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { Sudadera1Component } from './sudadera1/sudadera1.component';
import { Sudadera2Component } from './sudadera2/sudadera2.component';
import { Sudadera3Component } from './sudadera3/sudadera3.component';
import { Sudadera4Component } from './sudadera4/sudadera4.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CollectionsComponent,
    Sudadera1Component,
    Sudadera2Component,
    Sudadera3Component,
    Sudadera4Component,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
