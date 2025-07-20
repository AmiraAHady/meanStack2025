import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  @Input() id!: string;
  allMovies!: any[];
  selectedMovie!: any;

  constructor(private movsService: MoviesService) {}
  ngOnInit(): void {
     this.movsService.getMovieById(Number(this.id)).subscribe({next:(movie)=>{
      this.selectedMovie=movie;
     }})
  }
}
