import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  arr=[{name:"iphone",category:"electronic",rate:10000,avgRating:3,quantity:1},{name:"ipad",category:"electronic",rate:20000,avgRating:4,quantity:1},
  {name:"nike",category:"shoes",rate:4000,avgRating:3.5,quantity:1},{name:"jeans",category:"clothing",rate:2000,avgRating:4,quantity:1},
  {name:"adidas",category:"shoes",rate:3000,avgRating:4,quantity:1}];
  cartArr=[];
  constructor() { }
 
}
