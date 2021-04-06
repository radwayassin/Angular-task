import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor() {
    localStorage.setItem('likedMovies', JSON.stringify([]));
    localStorage.setItem('favMovies', JSON.stringify([]));
    localStorage.setItem('comments', JSON.stringify([]));

  }

  ngOnInit(): void {}
}
