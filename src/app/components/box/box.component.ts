import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProducsService } from '../../services/producs.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  constructor(private productServices: ProducsService) { }
  allProducts: Observable<any>

  ngOnInit() {
     this.getProducts();
  }

  getProducts() {
    this.allProducts = this.productServices.getProducts();
  }

  addToCart(product) {
    console.log(product);
  }
}
