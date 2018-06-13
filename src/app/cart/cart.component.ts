import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  grandTotal=0;
  subTotal=0;
  number=[1,2,3,4,5,6,7,8,9];
  total()
  {
   this.grandTotal=0;
    for(let prod=0;prod<this.a.length;prod++)
    {
      this.grandTotal+=(this.a[prod].rate*this.a[prod].quantity);
    }
    return this.grandTotal;
  }
  remove(i)
  {
    this.a.splice(i,1);
  }
  // subTotalPrice(i)
  // {
  //   this.subTotal=0;
  //   this.subTotal=(this.a[i].rate*this.a[i].quantity);
  //   return this.subTotal;
  // }
  constructor(private cService:ProductService) { }
  a=this.cService.cartArr;

  set(i,q)
{
  this.a[i].quantity=q;
}  
  ngOnInit() {
  }

 

  

}
