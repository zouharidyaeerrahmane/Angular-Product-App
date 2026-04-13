import { Injectable } from '@angular/core';

import { Products } from '../products/products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Product {

constructor(private http : HttpClient) {}
  getAllProducts() {
    return this.http.get('http://localhost:8084/products');
  }
  deleteProduct(product: any) {
  return this.http.delete("http://localhost:8084/products/"+product.id);
  }

}
