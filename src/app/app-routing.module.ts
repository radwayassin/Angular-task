import { MoviesModule } from './movies/movies.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/sign-in', pathMatch: 'full' },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (mod) => mod.AuthenticationModule
      ),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then(
        (mod) => mod.MoviesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
