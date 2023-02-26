import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(name:any,price:any,isActive:any){
    console.log(name);
    console.log(price);
    console.log(isActive);
    
  }

}
