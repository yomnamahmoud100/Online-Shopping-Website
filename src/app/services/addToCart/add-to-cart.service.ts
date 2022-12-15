import { Injectable } from '@angular/core';
import {ProductDetails} from "../../utilities/productDetails";


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  cartDetails:ProductDetails[]=[]
  constructor() { }
  adding(product:ProductDetails){
    this.cartDetails.push(product)
    console.log(this.cartDetails)
  }
}
