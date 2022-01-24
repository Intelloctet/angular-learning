import { EventDriverService } from './../../services/event.driver.service';
import { ProductsState } from './../../models/enum.product.state';
import { AppDataState } from './../../models/product.app.data.state.model';
import { ProductActionEvent } from './../../models/product.action.event.models';
import { ProductActionsType } from './../../models/enum.product.actions.type';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<AppDataState<Product[]>>  | null=null;
  readonly dataStateEnum = ProductsState;

  constructor(private productsService: ProductsService,
              private router: Router,
              private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe(
      (actionEvent : ProductActionEvent) =>{
        this.onActionsProductNavBar(actionEvent);
      });
  }

  onGetAllProducts(){
    this.products$ = this.productsService.getAllProducts().pipe(
     map(data => {
       return({dataState: ProductsState.LOADED,data:data})}),
     startWith({dataState: ProductsState.LOADING}),
     catchError(err => of({dataState: ProductsState.ERROR, errorMessage: err.message}))
    );
  }

  onGetSelectedProducts(){
    this.products$ = this.productsService.getSelectedProducts().pipe(
      map(data => {return({dataState: ProductsState.LOADED,data:data})}),
      startWith({dataState: ProductsState.LOADING}),
      catchError(err => of({dataState: ProductsState.ERROR, errorMessage: err.message}))
    );
  }

  onGetAvailableProducts(){
    this.products$ = this.productsService.getAvailableProducts().pipe(
      map(data => {return({dataState: ProductsState.LOADED,data:data})}),
    startWith({dataState: ProductsState.LOADING}),
    catchError(err => of({dataState: ProductsState.ERROR, errorMessage: err.message}))
    );
  }

  onSearchProducts(data: any){
    this.products$ = this.productsService.searchProducts(data.keyword).pipe(
      map(data => {return({dataState: ProductsState.LOADED,data:data})}),
    startWith({dataState: ProductsState.LOADING}),
    catchError(err => of({dataState: ProductsState.ERROR, errorMessage: err.message}))
    );
  }

  onNewProduct(){
    this.router.navigateByUrl("/newProduct");
  }
  onSelectProduct(product: Product){
    this.productsService.updateSelectProduct(product).subscribe(
      data => {product.selected = data.selected}
    )
  }

  onEditProduct(product: Product){
    this.router.navigateByUrl("/updateProduct/" + product.id);
  }

  onDeleteProduct(product: Product){
    this.productsService.deleteProduct(product).subscribe(
      data => this.onGetAllProducts()
    );
  }

  onActionsProductNavBar($event : ProductActionEvent){
   switch ($event.type) {
     case ProductActionsType.GET_ALL_PRODUCTS: this.onGetAllProducts();break;
     case ProductActionsType.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts();break;
     case ProductActionsType.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts();break;
     case ProductActionsType.NEW_PRODUCTS: this.onNewProduct();break;
     case ProductActionsType.SEARCH_PRODUCTS: this.onSearchProducts($event.payload);break;
     case ProductActionsType.SELECT_PRODUCTS: this.onSelectProduct($event.payload);break;
     case ProductActionsType.EDIT_PRODUCTS: this.onEditProduct($event.payload);break;
     case ProductActionsType.DELETE_PRODUCTS: this.onDeleteProduct($event.payload);break;
     default:
       break;
   }
  }
}
