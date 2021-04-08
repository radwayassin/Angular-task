import { DataService } from '../../Services/data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.scss'],
})
export class MoviesHomeComponent implements OnInit {
  TopMovies = [];
  UpComing = [];
  NowPlay = [];
  existLikedMovies = [];
  existFavMovies = [];
  constructor(private dataService: DataService) {}
  topMovies() {
    this.dataService.getPopler().subscribe(
      (res) => {
        this.TopMovies = res;
        this.existLikedMovies.forEach((likedMovie) => {
          this.TopMovies.forEach((topMovie) => {
            if (likedMovie.id == topMovie.id) {
              topMovie.isLiked = true;
            } else {
              topMovie.isLiked = false;
            }
          });
        });
        this.existFavMovies.forEach((favMovie) => {
          this.TopMovies.forEach((topMovie) => {
            if (favMovie.id == topMovie.id) {
              topMovie.isFav = true;
            } else {
              topMovie.isFav = false;
            }
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  upComing() {
    this.dataService.getUpComing().subscribe(
      (res) => {
        this.UpComing = res;
        this.existLikedMovies.forEach((likedMovie) => {
          this.UpComing.forEach((upcomingMovie) => {
            if (likedMovie.id == upcomingMovie.id) {
              upcomingMovie.isLiked = true;
            } else {
              upcomingMovie.isLiked = false;
            }
          });
        });
        this.existFavMovies.forEach((favMovie) => {
          this.UpComing.forEach((upcomingMovie) => {
            if (favMovie.id == upcomingMovie.id) {
              upcomingMovie.isFav = true;
            } else {
              upcomingMovie.isFav = false;
            }
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  nowPlaying() {
    this.dataService.getNowPlay().subscribe(
      (res) => {
        this.NowPlay = res;
        this.existLikedMovies.forEach((likedMovie) => {
          this.NowPlay.forEach((nowplayMovie) => {
            if (likedMovie.id == nowplayMovie.id) {
              nowplayMovie.isLiked = true;
            } else {
              nowplayMovie.isLiked = false;
            }
          });
        });
        this.existFavMovies.forEach((favMovie) => {
          this.NowPlay.forEach((nowplayMovie) => {
            if (favMovie.id == nowplayMovie.id) {
              nowplayMovie.isFav = true;
            } else {
              nowplayMovie.isFav = false;
            }
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.existLikedMovies = JSON.parse(localStorage.getItem('likedMovies'));
    this.existFavMovies = JSON.parse(localStorage.getItem('favMovies'));
    this.topMovies();
    this.upComing();
    this.nowPlaying();
  }
}
