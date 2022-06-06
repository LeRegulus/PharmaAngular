import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Product} from "../Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:5000/products";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

    getById(id: string | null): Observable<Product>{
    return this.http.get<Product>(this.apiUrl+'/'+id);
  }

  update( id: number , product: Product){
    return this.http.put(this.apiUrl+'/'+id, product);
  }

  delete(id: number){
    return this.http.delete(this.apiUrl+'/'+id);
  }

}
