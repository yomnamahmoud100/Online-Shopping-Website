import { Component, OnInit } from '@angular/core';
import {AddToCartService} from "../../../services/addToCart/add-to-cart.service";
import {ProductDetails} from "../../../utilities/productDetails";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart:AddToCartService,private _router:Router) { }

  ngOnInit(): void {
  }
  cartDetails:ProductDetails[]=this.cart.cartDetails;

  deleteItem(id :number) {
     this.cartDetails= this.cartDetails.filter(product=> (product.id != id),1);
       console.log(this.cartDetails);
    this.cart.cartDetails = this.cartDetails;
  }
  isAlerted : boolean =false;
  show() {
    alert('your order has been shipped !!');
    this._router.navigate(['/products']);
    this.cart.cartDetails = [];
    this.cartDetails = [];
  }
}
