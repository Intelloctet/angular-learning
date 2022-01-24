import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsItemComponent } from './components/products/products-list/products-item/products-item.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { AppRoutingModule } from "./app-routing.module";
import { FeaturesComponent } from './features/features.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsAddComponent } from './components/products/products-add/products-add.component';
import { ProductRoutingModule } from "./routes/product-routing.module";
import { ProductsEditComponent } from './components/products/products-edit/products-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavBarComponent,
    ProductsListComponent,
    ProductsItemComponent,
    ProductsNavBarComponent,
    FeaturesComponent,
    ProductsAddComponent,
    ProductsEditComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
