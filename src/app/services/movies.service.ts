import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey = '';
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&page=2`
    );
  }
  getMovieById(movId: number): Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movId}
?api_key=${this.apiKey}`);
  }
}
