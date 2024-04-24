import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { Imagenes2dComponent } from './imagenes2d/imagenes2d.component';
import { HomeComponent } from './home/home.component'

//rutas


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    Imagenes2dComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
