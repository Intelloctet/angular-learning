import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor( private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products");
  }

  getSelectedProducts():Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?selected=true")
  }

  getAvailableProducts(): Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?available=true");
  }

  searchProducts(keyword : string): Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?name_like=" + keyword);
  }

  saveProducts(product: Product): Observable<Product>{
    let host = environment.host;
    return this.http.post<Product>(host + "/products/",product);
  }

  updateSelectProduct(product: Product): Observable<Product>{
    let host = environment.host;
    product.selected =! product.selected;
    return this.http.put<Product>(host + "/products/"+ product.id,product);
  }

  getProduct(productId: number): Observable<Product>{
    let host = environment.host;
    console.log(productId);
    return this.http.get<Product>(host + "/products/" + productId)
  }

  updateProduct(product: Product): Observable<Product>{
    let host = environment.host;
    return this.http.put<Product>(host + "/products/"+ product.id,product);
  }

  deleteProduct(product: Product): Observable<void>{
    let host = environment.host;
    return this.http.delete<void>(host + "/products/"+ product.id);
  }

}
