import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products implements OnInit {
  products: any;

  constructor() {}
  ngOnInit(): void {
    this.products = [
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
  }
  handleDelete(p: any) {
    this.products = this.products.filter((product: any) => product.id !== p.id);
  }
}
