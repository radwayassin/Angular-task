import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesComponent } from './movies.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movies-home/movie-card/movie-card.component';
import { LikesComponent } from './likes/likes.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MoviesHomeComponent,
    HeaderComponent,
    MovieCardComponent,
    LikesComponent,
    FavouritesComponent,
    ViewMovieComponent
  ],
  imports: [CommonModule, MoviesRoutingModule, FormsModule],
})
export class MoviesModule {}
