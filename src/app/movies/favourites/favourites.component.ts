import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favMovies: Array<any>;
  constructor() {}

  ngOnInit(): void {
    this.favMovies = JSON.parse(localStorage.getItem('favMovies'));
  }
}
