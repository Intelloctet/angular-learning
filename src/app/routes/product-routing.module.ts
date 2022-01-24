import { ProductsEditComponent } from './../components/products/products-edit/products-edit.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsAddComponent } from "../components/products/products-add/products-add.component";

const routes: Routes = [
  {path: "newProduct" , component: ProductsAddComponent},
  {path: "updateProduct/:id", component: ProductsEditComponent},
  /* {path: "features", component: FeaturesComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
