import { Product } from 'src/app/models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  productFormGroup?: FormGroup;
  productId:number;

  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) {
      this.productId = this.activatedRoute.snapshot.params['id'];
              }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId).subscribe(
      product => {
        this.productFormGroup = this.formbuilder.group ({
      id:[product.id,Validators.required],
      name: [product.name,Validators.required],
      price: [product.price,Validators.required],
      quantity: [product.quantity,Validators.required],
      selected: [product.selected,Validators.required],
      available: [product.available,Validators.required]
        });
        console.log(product);
      });
  }
  onUpdateProduct(){
    this.submitted = true;
    if(this.productFormGroup?.invalid) return;
    this.productsService.updateProduct(this.productFormGroup?.value).subscribe(
      product => {this.router.navigateByUrl("/products")}
    );
  }

}
