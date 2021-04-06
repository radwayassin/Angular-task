import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  isLiked: boolean;
  isFav: boolean;
  likedMovies: Array<any> = [];
  favMovies: Array<any> = [];
  constructor() {
    localStorage.setItem('likedMovies', JSON.stringify(this.likedMovies)) ;
    localStorage.setItem('favMovies', JSON.stringify(this.favMovies)) ;

  }
  getLiked(movie: any) {
    this.isLiked = !this.isLiked;
    this.likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
    if (this.isLiked) {
      this.likedMovies.push(movie);
      localStorage.setItem('likedMovies', JSON.stringify(this.likedMovies));
      console.log(this.likedMovies)
    } else {
      this.likedMovies = this.likedMovies.filter((movieItem)=> {return movieItem.id !== movie.id}) ;
      localStorage.setItem('likedMovies', JSON.stringify(this.likedMovies));
    }
  }
  getFavourits(movie: any) {
    this.isFav = !this.isFav;
    this.favMovies = JSON.parse(localStorage.getItem('favMovies'));
    if (this.isFav) {
      this.favMovies.push(movie);
      localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
      console.log(this.favMovies)
    } else {
      this.favMovies = this.favMovies.filter((movieItem)=> {return movieItem.id !== movie.id}) ;
      localStorage.setItem('favMovies', JSON.stringify(this.favMovies));
    }
  }
  ngOnInit(): void {}
}
