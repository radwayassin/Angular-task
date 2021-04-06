import { DataService } from './../../Services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  TopMovies = [];
  UpComing = [];
  NowPlay =[]
  constructor(private dataService: DataService) {}
  topMovies() {
    this.dataService.getPopler().subscribe(
      (res) => {
        this.TopMovies = res;
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
      },
      (error) => {
        console.log(error);
      }
    );
  }
  nowPlaying(){
    this.dataService.getNowPlay().subscribe(
      (res) => {
        this.NowPlay = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.topMovies();
    this.upComing();
    this.nowPlaying();
  }
}
