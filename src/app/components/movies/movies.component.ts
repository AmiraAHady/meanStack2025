import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  imports: [DatePipe, CurrencyPipe, RatingComponent, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit, OnDestroy {
  price!: number;

  constructor(private movsService: MoviesService) {
    this.price = 3.8;
  }

  // parentRating=3.8;
  moviesList!: any[] ;

  ngOnInit() {
    // api call
    this.movsService.getAllMovies().subscribe({
      next: (response) => {
       this.moviesList=response.results;
      },
    });
  }

  showMessage(childData: string) {
    alert(childData);
  }

  ngOnDestroy(): void {
    console.log('the movies component is destroyed!');
  }
}
