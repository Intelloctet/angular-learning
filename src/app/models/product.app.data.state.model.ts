import { ProductsState } from "./enum.product.state";

export interface AppDataState<T> {
  dataState?: ProductsState,
  data?: T,
  errorMessage?:string
}
