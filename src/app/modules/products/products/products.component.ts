import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products/products.service";
import {ProductDetails} from "../../../utilities/productDetails";
import {AddToCartService} from "../../../services/addToCart/add-to-cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService :ProductsService ,private cart :AddToCartService) { }

// to read all the products in array
  products :any []=[];
  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data) => {console.log(data),this.products = data}
      ,(error)=>{console.log(error)},()=>{console.log('completed')})
  }

  cartProducts:ProductDetails[]=[];
  isSelected :boolean =false;
  addToCart(id:number){
    alert('The product is added to your cart');
     var obj = this.products.find(element => element.id ==id);
     this.cart.adding(obj);
  }

}
