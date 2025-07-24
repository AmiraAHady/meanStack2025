import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  // @Input() id!: string;
  id!:number
  allMovies!: any[];
  selectedMovie!: any;

  constructor(private movsService: MoviesService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
     this.movsService.getMovieById(Number(this.id)).subscribe({next:(movie)=>{
      this.selectedMovie=movie;
     }})
  }
}
