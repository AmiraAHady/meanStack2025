import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
   return this.http.get<Product[]>(`http://localhost:3000/product`)
  }
  
  getProductById(productId:number):Observable<Product>{
   return this.http.get<Product>(`http://localhost:3000/product/${productId}`)
  }

}
