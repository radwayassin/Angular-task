import {MoviesService} from '../../Services/movies.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss'],
})
export class ViewMovieComponent implements OnInit {
  movieId: any;
  movieDetails: any;
  imgUrl = 'https://image.tmdb.org/t/p/w500';
  comments: Array<any> = [];

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
  }

  getMovieDetails() {
    this.moviesService.getMovieDetails(this.movieId).subscribe(
      (res) => {
        this.movieDetails = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  submitComment(commentForm: NgForm) {
    const comment = commentForm.value.comment;
    this.comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.movieId = +params.get('id')!;
    });
    this.getMovieDetails();
    this.comments = JSON.parse(localStorage.getItem('comments'));
  }
}
