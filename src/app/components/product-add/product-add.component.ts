import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 
  productFormGroup?:FormGroup;
  submitted:Boolean= false;
  
  constructor(private fb:FormBuilder,private productsService:ProductsService) {   }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      title : ["",Validators.required],
      author : ["",Validators.required],
      type : ["",Validators.required],
      selected : [false,Validators.required],
      available : [false,Validators.required]
    });
  }
  onSaveProduct(): void {
    this.submitted = true;
    if(this.productFormGroup?.invalid) return;
    this.productsService.saveProduct(this.productFormGroup?.value)
    .subscribe(data => {

    });
  }
}
