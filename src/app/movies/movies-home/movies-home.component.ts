import { MoviesService } from '../../Services/movies.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss'],
})
export class MoviesHomeComponent implements OnInit {
  topMovies = [];
  upcomingMovies = [];
  nowPlayingMovies = [];
  existLikedMovies = [];
  existFavMovies = [];
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    // get liked and favourite movies from local storage .
    this.existLikedMovies = JSON.parse(localStorage.getItem('likedMovies'));
    this.existFavMovies = JSON.parse(localStorage.getItem('favMovies'));
    this.getTopMovies();
    this.getUpComingMovies();
    this.getNowPlayingMovies();
  }
  getTopMovies() {
    this.moviesService.getPopler().subscribe(
      (res) => {
        this.topMovies = res;
        this.getLikedFavMoviesFromLocatStrg(
          this.topMovies,
          this.existLikedMovies,
          this.existFavMovies
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getUpComingMovies() {
    this.moviesService.getUpComing().subscribe(
      (res) => {
        this.upcomingMovies = res;
        this.getLikedFavMoviesFromLocatStrg(
          this.upcomingMovies,
          this.existLikedMovies,
          this.existFavMovies
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getNowPlayingMovies() {
    this.moviesService.getNowPlay().subscribe(
      (res) => {
        this.nowPlayingMovies = res;
        this.getLikedFavMoviesFromLocatStrg(
          this.nowPlayingMovies,
          this.existLikedMovies,
          this.existFavMovies
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getLikedFavMoviesFromLocatStrg(
    allMovies: any[],
    likedList: any[],
    favouriteList: any[]
  ) {
    // loop for liked movies to make the icon selected
    likedList.forEach((likedMovie) => {
      allMovies.forEach((allMovie) => {
        if (likedMovie.id === allMovie.id) {
          allMovie.isLiked = true;
        }
      });
    });
    // loop for fav movies to make the icon selected
    favouriteList.forEach((favMovie) => {
      allMovies.forEach((nowPlayingMovie) => {
        if (favMovie.id === nowPlayingMovie.id) {
          nowPlayingMovie.isFav = true;
        }
      });
    });
  }
}
