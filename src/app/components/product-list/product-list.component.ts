import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products!: Product[];
  constructor(private productServ: ProductService) {}

  ngOnInit(): void {
    this.productServ.getAllProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.products=data
      },
    });
  }
}
