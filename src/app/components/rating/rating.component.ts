import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnChanges
{
  @Input() recivedRating!:number
  @Output() messageToParent=new EventEmitter<string>()

  sendMessage(){
    this.messageToParent.emit(`the clicked rating is ${this.recivedRating}`)
  }

 ngOnChanges(): void {
     console.log(`value changed ${this.recivedRating}`);
     
 }
}
