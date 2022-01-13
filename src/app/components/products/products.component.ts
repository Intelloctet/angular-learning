import { Router, Routes } from '@angular/router';
import { AppDataState, DataStateEnum } from './../../state/product.state';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$:Observable<AppDataState<Product[]>> |null=null;
  readonly dataStateEnum = DataStateEnum;
  constructor(private productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
    this.products$ = this.productsService.getAllProducts().pipe(
      map(data=> {
        return ({dataState:DataStateEnum.LOADED, data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=> of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    ); 
  }
  onGetSelectedProducts(){
    this.products$ = this.productsService.getSelectedProducts().pipe(
      map(data=> {
        return ({dataState:DataStateEnum.LOADED, data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=> of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    ); 
}
onGetAvailabelProducts(){
  this.products$ = this.productsService.getAvailableProducts().pipe(
    map(data=> {
      return ({dataState:DataStateEnum.LOADED, data:data})}),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=> of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
  ); 
}
onSearch(dataForm:any){
  this.products$ = this.productsService.getSearchProducts(dataForm.keyword).pipe(
    map(data=> {
      return ({dataState:DataStateEnum.LOADED, data:data})}),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=> of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
  ); 
}
onSelect(product : Product){
  this.productsService.updateSelect(product).subscribe(
    data => {product.selected = data.selected;
    })
  }
onDelete(product : any){
  this.productsService.deleteProduct(product).subscribe(
    data => {this.onGetAllProducts();}
  );
  }
onNewProduct(){
  this.router.navigateByUrl("/newProduct");
}
onEdit(product:Product):void{
    this.router.navigateByUrl("/editProduct/"+product.id);
}
}
