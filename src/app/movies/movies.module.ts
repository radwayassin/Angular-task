import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { LikesComponent } from './likes/likes.component';
import { FavouritesComponent } from './favourites/favourites.component';


@NgModule({
  declarations: [MoviesComponent, HeaderComponent, MovieCardComponent, LikesComponent, FavouritesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
