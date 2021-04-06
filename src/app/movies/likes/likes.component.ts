import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit {
  likedMovies:Array<any>;
  constructor() {}

  ngOnInit(): void {
    this.likedMovies = JSON.parse(localStorage.getItem('likedMovies'))
  }
}
