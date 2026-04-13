import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products implements OnInit {
  products: any;
  constructor(private productService: Product) {
  }
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
  handleDelete(product: any) {
    let v = confirm('Are you sure you want to delete this product ?');
    if (v) {
      this.productService.deleteProduct(product);
      this.products = this.productService.getAllProducts();
    }


  }
}
