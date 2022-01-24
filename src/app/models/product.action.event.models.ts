import { Product } from './product.model';
import { ProductActionsType } from './enum.product.actions.type';
export interface ProductActionEvent {
  type: ProductActionsType,
  payload?: any
}
