import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// Decorator 
@Component({
  selector: 'app-root',//render
  imports: [HomeComponent,RecipesComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'myApp';
}
