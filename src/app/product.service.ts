import { Injectable } from '@angular/core';
import { Model, Product } from './Model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  model = new Model();

  constructor() {}

  getProducts() {
    return this.model.products;
  }

  getProductById(id) {
    return this.model.products.find((p) => p.id == id);
  }

  saveProduct(product: Product) {
    if (product.id == 0) {
      (product.id = this.getProducts().length + 1),
        this.model.products.push(product);
    } else {
      const p = this.getProductById(product.id);
      p.name = product.name;
      p.price = product.price;
      p.isActive = product.isActive;
    }
  }

  deleteProduct(product: Product) {
    this.model.products = this.model.products.filter((p) => p !== product);
  }
}
