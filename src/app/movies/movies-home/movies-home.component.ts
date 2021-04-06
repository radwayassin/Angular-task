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
