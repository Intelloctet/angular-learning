import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({providedIn:"root"}) // pour que le service soit disponible dans tous l'application sans app.modules
export class ProductsService {
    constructor(private http:HttpClient){

    }
    getAllProducts() : Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host + "/products");
    }
    getSelectedProducts() : Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host + "/products?selected=true");
    }
    getAvailableProducts() : Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host + "/products?available=true");
    }
    getSearchProducts(keyword:string) : Observable<Product[]>{
        let host = environment.host;
        return this.http.get<Product[]>(host + "/products?title_like="+keyword);
    }
    updateSelect(product:Product) : Observable<Product>{
        let host = environment.host;
        product.selected = ! product.selected;
        return this.http.put<Product>(host + "/products/"+product.id,product);
    }
    deleteProduct(product:Product) : Observable<void>{
        let host = environment.host;
       return this.http.delete<void>(host + "/products/"+product.id);
    }
    saveProduct(product:Product) : Observable<Product>{
        let host = environment.host;
        return this.http.post<Product>(host + "/products/",product);
    }
    getProduct(productId:number) : Observable<Product>{
        let host = environment.host;
        return this.http.get<Product>(host + "/products/"+productId);
    }
    updateProduct(product:Product) : Observable<Product>{
        let host = environment.host;
        return this.http.put<Product>(host + "/products/"+product.id,product);
    }
}