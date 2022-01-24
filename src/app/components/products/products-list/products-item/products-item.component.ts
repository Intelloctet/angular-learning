import { EventDriverService } from './../../../../services/event.driver.service';
import { ProductActionsType } from './../../../../models/enum.product.actions.type';
import { ProductActionEvent } from './../../../../models/product.action.event.models';
import { Product } from './../../../../models/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product$?: Product;
  //@Output() productItemEventEmitter: EventEmitter<ProductActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {

  }

  onSelectProduct(product: Product){
    /*this.productItemEventEmitter.emit({
      type:ProductActionsType.SELECT_PRODUCTS,
      payload: product});*/
      this.eventDriverService.publishEvent({
        type:ProductActionsType.SELECT_PRODUCTS,
        payload: product});
  }

  onEditProduct(product: Product){
  /*this.productItemEventEmitter.emit({
      type:ProductActionsType.EDIT_PRODUCTS,
      payload: product});*/
      this.eventDriverService.publishEvent({
        type:ProductActionsType.EDIT_PRODUCTS,
        payload: product})
  }

  onDeleteProduct(product: Product){
    /*this.productItemEventEmitter.emit({
      type:ProductActionsType.DELETE_PRODUCTS,
      payload: product});*/
      this.eventDriverService.publishEvent({
        type:ProductActionsType.DELETE_PRODUCTS,
        payload: product});
  }

}
