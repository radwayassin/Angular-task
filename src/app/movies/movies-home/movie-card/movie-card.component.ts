import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  isFav: boolean;
  likedMovies: Array<any> = [];
  favMovies: Array<any> = [];
  constructor() {
  }
  getLiked(movie: any) {
    this.likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
    if (!movie.isLiked) {
      movie.isLiked = true;
      this.likedMovies.push(movie);
      localStorage.setItem('likedMovies', JSON.stringify(this.likedMovies));
      console.log(this.likedMovies);
    } else {
      movie.isLiked = false;
      this.likedMovies = this.likedMovies.filter((movieItem) => {
        return movieItem.id !== movie.id;
      });
      localStorage.setItem('likedMovies', JSON.stringify(this.likedMovies));
    }
  }
  getFavourits(movie: any) {
    this.favMovies = JSON.parse(localStorage.getItem('favMovies'));
    if (!movie.isFav) {
      movie.isFav = true;
      this.favMovies.push(movie);
      localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
      console.log(this.favMovies);
    } else {
      movie.isFav = false;
      this.favMovies = this.favMovies.filter((movieItem) => {
        return movieItem.id !== movie.id;
      });
      localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
    }
  }
  ngOnInit(): void {}
}
