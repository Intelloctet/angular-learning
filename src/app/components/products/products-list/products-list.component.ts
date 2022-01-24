import { AppDataState } from './../../../models/product.app.data.state.model';
import { ProductActionEvent } from './../../../models/product.action.event.models';
import { Product } from './../../../models/product.model';
import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductActionsType } from 'src/app/models/enum.product.actions.type';
import { ProductsState } from 'src/app/models/enum.product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productInput$: Observable<AppDataState<Product[]>> | null=null;
  //@Output() productsListEventEmitter:EventEmitter<ProductActionEvent> = new EventEmitter;
  readonly dataStateEnum = ProductsState;

  constructor() { }

  ngOnInit(): void {
  }
  onListActionEvent($event: ProductActionEvent){
   // this.productsListEventEmitter.emit($event);

  }
}
