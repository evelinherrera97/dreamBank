import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { Data } from 'src/app/interfaces/data';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public data: Data;
  public success = false;

  newProduct = new FormGroup({
    products: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    monthly: new FormControl('', Validators.required),
  });

  constructor(
    public mainServices : MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  sendProduct() {
    console.log(this.newProduct.value)
    if (this.newProduct.valid) {
      this.data = {
        accountName: '',
        accountNumber: null,
        type: this.newProduct.value.products,
        status: 'pending',
        currency: 'usd',
        cellphone: this.newProduct.value.cellphone,
        balance: this.newProduct.value.monthly,
        movements: []
      }
      this.mainServices.createAccount(this.data);
      this.success = true;

    } else {

    }
  }

}
