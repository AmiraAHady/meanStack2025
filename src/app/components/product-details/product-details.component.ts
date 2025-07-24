import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @Input() id!: string;
product!:Product
  constructor(private productServ:ProductService){}
  ngOnInit(): void {
      this.productServ.getProductById(+this.id).subscribe({next:(data)=>{
        this.product=data;
      }})
  }

}
