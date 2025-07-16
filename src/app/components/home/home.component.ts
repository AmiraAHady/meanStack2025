import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  myData={
    pagetitle: 'Food Court',
    mealName:'Cookies'
  }
  
  saladImg = 'https://cdn.dummyjson.com/recipe-images/6.webp';
  item: boolean = false;
  searchVal='water'

  addItemToCart(title: string) {
    alert(`${title} added successfuly to cart`);
  }
}
