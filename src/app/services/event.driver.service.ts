import { ProductActionEvent } from './../models/product.action.event.models';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  sourceEventSubject : Subject<ProductActionEvent> = new Subject();
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();
  constructor() { }
  publishEvent(event$ : ProductActionEvent){
    this.sourceEventSubject.next(event$);
  }
}
