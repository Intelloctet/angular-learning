import { ProductActionEvent } from './../../../models/product.action.event.models';
import { ProductActionsType } from './../../../models/enum.product.actions.type';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventDriverService } from 'src/app/services/event.driver.service';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //@Output() productsEventEmitter: EventEmitter<ProductActionEvent> = new EventEmitter();

  constructor(private eventDriverService : EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
  //this.productsEventEmitter.emit({type: ProductActionsType.GET_ALL_PRODUCTS});
  this.eventDriverService.publishEvent({type: ProductActionsType.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts(){
   // this.productsEventEmitter.emit({type: ProductActionsType.GET_SELECTED_PRODUCTS});
   this.eventDriverService.publishEvent({type: ProductActionsType.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(){
   // this.productsEventEmitter.emit({type: ProductActionsType.GET_AVAILABLE_PRODUCTS});
   this.eventDriverService.publishEvent({type: ProductActionsType.GET_AVAILABLE_PRODUCTS});
  }

  onSearchProducts(keyword: string){
   // this.productsEventEmitter.emit({type: ProductActionsType.SEARCH_PRODUCTS, payload: keyword});
   this.eventDriverService.publishEvent({type: ProductActionsType.SEARCH_PRODUCTS, payload: keyword});
  }

  onNewProducts(){
  //  this.productsEventEmitter.emit({type: ProductActionsType.NEW_PRODUCTS});
  this.eventDriverService.publishEvent({type: ProductActionsType.NEW_PRODUCTS});
  }
}
