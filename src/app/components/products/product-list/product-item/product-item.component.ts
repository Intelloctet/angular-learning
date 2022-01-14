import { Product } from 'src/app/model/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
  @Input() product?: Product;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  ngOnInit(): void {
  }
  onSelect(product:Product){
    this.productEventEmitter.emit({
      type : ProductActionsTypes.SELECT_PRODUCTS, payload : product
    });
  }
  onEdit(product:Product){
    this.productEventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCTS, payload: product
    });
  }
  onDelete(product:Product){
    this.productEventEmitter.emit({
      type: ProductActionsTypes.DELETE_PRODUCTS, payload: product
    })
  }
}
