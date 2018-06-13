import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private cService: ProductService) { }

 

  ngOnInit() {
  }
  a=this.cService.arr;
  add(i)
  {
    this.cService.cartArr.push(this.cService.arr[i]);
  }

}
