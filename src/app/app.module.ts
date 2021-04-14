import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { headerComponent } from './header/header.component';
import { loginComponent } from './auth/login/login.component';
import { signupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './movies/movieList/movie-list.component';
import { welcomeComponent } from './welcome/welcome.component';
import { AddMovieComponent } from './movies/addMovie/addmovie.component';
import { MovieCardComponent } from './movies/movieCard/movieCard.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    welcomeComponent,
    loginComponent,
    signupComponent,
    MovieCardComponent,
    MovieListComponent,
    AddMovieComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutes,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
