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
  // likeMovie: any = [];
  constructor() {}
  getLikeId(movie: any) {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likedMovies.push(movie);
      localStorage.setItem('likedMovies', JSON.stringify(this.likedMovies));
      
    } else {
      localStorage.removeItem('likedMovies');
    }
  }
  getFavId(movie: any) {
    this.isFav = !this.isFav;
    if (this.isFav) {
      localStorage.setItem('favMovies', movie);
    } else {
      localStorage.removeItem('favId');
    }
  }
  ngOnInit(): void {}
}
