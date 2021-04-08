import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  likedMovies: Array<any> = [];
  favMovies: Array<any> = [];

  constructor() {
  }

  checkUncheckLike(movie: any) {
    // get liked movies from local storage and add or remove from it
    this.likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
    if (!movie.isLiked) {
      movie.isLiked = true;
      this.likedMovies.push(movie);
    } else {
      movie.isLiked = false;
      this.likedMovies = this.likedMovies.filter((movieItem) => {
        return movieItem.id !== movie.id;
      });
    }
    localStorage.setItem('likedMovies', JSON.stringify(this.likedMovies));
  }

  checkUncheckFavourite(movie: any) {
    // get favourite movies from local storage and add or remove from it
    this.favMovies = JSON.parse(localStorage.getItem('favMovies'));
    if (!movie.isFav) {
      movie.isFav = true;
      this.favMovies.push(movie);
      localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
    } else {
      movie.isFav = false;
      this.favMovies = this.favMovies.filter((movieItem) => {
        return movieItem.id !== movie.id;
      });
      localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
    }
  }

  ngOnInit(): void {
    console.log(this.movie) ;
  }
}
