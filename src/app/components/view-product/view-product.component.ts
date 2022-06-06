import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../Product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product: any;
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ;
    this.product =  this.productService.getById(id).subscribe((product) =>{
      this.product = product;
    });
  }

}
