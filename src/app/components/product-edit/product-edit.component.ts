import { ProductsService } from './../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  productId:number;

  constructor(private activatedRoute:ActivatedRoute,
              private fb:FormBuilder,
              private productsService:ProductsService ) {
    this.productId = this.activatedRoute.snapshot.params?.['id'];
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId)
    .subscribe(
      product => {
       this.productFormGroup = this.fb.group({
          id:[product.id,Validators.required],
          title:[product.title,Validators.required],
          author:[product.author,Validators.required],
          type:[product.type,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required],
        });
      }
    );   
  }
  onUpdateProduct(){
    this.submitted = true;
    if(this.productFormGroup?.invalid) return;
    this.productsService.updateProduct(this.productFormGroup?.value).subscribe(
      product => {

      }
    )
  }
}
