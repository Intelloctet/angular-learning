import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
  productFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder,private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup = this.formbuilder.group({
      name: ["",Validators.required],
      price: [0,Validators.required],
      quantity: [0,Validators.required],
      selected: [true,Validators.required],
      available: [true,Validators.required]
    });
  }
  onSaveProduct(){
    this.submitted = true;
    console.log(this.productFormGroup?.value);
    if(this.productFormGroup?.invalid) return;
    this.productsService.saveProducts(this.productFormGroup?.value)
    .subscribe(
      data => {alert("Product added!")});
  }
}
