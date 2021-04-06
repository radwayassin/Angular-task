import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getPopler() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8a08ff1253d9eede1c0c97c4ec3f625b`
      )
      .pipe(map((res: any) => res.results));
  }
  getUpComing() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=8a08ff1253d9eede1c0c97c4ec3f625b`
      )
      .pipe(map((res: any) => res.results));
  }
  getNowPlay() {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=8a08ff1253d9eede1c0c97c4ec3f625b`
      )
      .pipe(map((res: any) => res.results));
  }
}
