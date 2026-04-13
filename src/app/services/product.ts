import { Injectable } from '@angular/core';

import { Products } from '../products/products';


@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    {
      id: 1,
      name: 'Monitor 27',
      price: 2000,
      selected: true,
    },
    {
      id: 2,
      name: 'Clavier',
      price: 550,
      selected: true,
    },
    {
      id: 3,
      name: 'Souris',
      price: 99,
      selected: false,
    },
  ];

  getAllProducts() {
    return this.products;
  }
  deleteProduct(product: any) {
  this.products = this.products.filter((p: any) => p.id !== product.id);
  }

}
