import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { CookieModule, CookieService, COOKIE_OPTIONS } from 'ngx-cookie';

import { AppComponent } from './app.component';

import * as fromBooks from './books';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';

import { RegistrationComponent } from './home/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    NavComponent,
    HomeComponent,
    LoginComponent,

    RegistrationComponent,
  ],
  imports: [
    // CookieModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  // providers: [CookieService, COOKIE_OPTIONS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
