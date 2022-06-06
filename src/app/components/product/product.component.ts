import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  name: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) =>{
      this.products = products;
    });
  }

  Saerch() {
    if (this.name == ""){
      this.ngOnInit();
    }else {
      this.products = this.products.filter(res => {
          return res.name.toLowerCase().match(this.name.toLowerCase());
        })
      }
  }
}
