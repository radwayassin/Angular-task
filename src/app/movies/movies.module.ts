import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movies-home/movie-card/movie-card.component';
import { LikesComponent } from './likes/likes.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesHomeComponent,
    HeaderComponent,
    MovieCardComponent,
    LikesComponent,
    FavouritesComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
