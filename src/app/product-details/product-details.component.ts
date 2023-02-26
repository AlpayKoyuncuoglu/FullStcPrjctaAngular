import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addProduct(name: any, price: any, isActive: any) {
    console.log(name);
    console.log(price);
    console.log(isActive);

    const p = new Product(
      this.productService.getProducts().length + 1,
      name,
      price,
      isActive
    );
    this.productService.addProduct(p);
  }
}
