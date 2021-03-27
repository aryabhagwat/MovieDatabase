import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { headerComponent } from './header/header.component';
import { loginComponent } from './login/login.component';
import { signupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    loginComponent,
    signupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
