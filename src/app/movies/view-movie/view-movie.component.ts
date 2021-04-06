import { DataService } from './../../Services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss'],
})
export class ViewMovieComponent implements OnInit {
  movieId: any;
  movieDetails: any;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  getMovie() {
    this.dataService.getMovieDetails(this.movieId).subscribe(
      (res) => {
        this.movieDetails = res;
        console.log(this.movieDetails)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = +params.get('id')!;
    });
    this.getMovie();
  }
}
