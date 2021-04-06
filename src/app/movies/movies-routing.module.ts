import { ViewMovieComponent } from './view-movie/view-movie.component';
import { MoviesComponent } from './movies.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AuthGuardService } from './../Services/auth-guard.service';
import { LikesComponent } from './likes/likes.component';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: MoviesHomeComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'view-movie/:id',
        component: ViewMovieComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'liked-movies',
        component: LikesComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'favourit-movies',
        component: FavouritesComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
