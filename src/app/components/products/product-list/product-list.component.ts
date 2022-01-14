import { Product } from 'src/app/model/product.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productInput$:Observable<AppDataState<Product[]>> |null=null;
  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  readonly dataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(p:Product){
    this.productEventEmitter.emit({
      type: ProductActionsTypes.SELECT_PRODUCTS,payload: p
    });
  }
  onEdit(p:Product){
    this.productEventEmitter.emit({
      type: ProductActionsTypes.EDIT_PRODUCTS,payload: p
    });
  }
  onDelete(p:Product){
    this.productEventEmitter.emit({
      type: ProductActionsTypes.DELETE_PRODUCTS,payload: p
    });
  }
  onActionEvent($event : ActionEvent){
    this.productEventEmitter.emit($event);
  }
}
